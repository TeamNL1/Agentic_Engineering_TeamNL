const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const { makeEnv } = require('../src/credentials.js');

function browser(picker) {
  const elements = {
    secret: { value: 'OEFEN-test' }, fictional: { checked: true },
    status: { textContent: '' }, button: { disabled: false }
  };
  let submit;
  const link = { click() { link.clicked = true; }, remove() {} };
  elements['secret-form'] = {
    querySelector: () => elements.button,
    addEventListener: (_, callback) => { submit = callback; }
  };
  vm.runInNewContext(fs.readFileSync(require.resolve('../src/app.js'), 'utf8'), {
    document: { getElementById: id => elements[id], createElement: () => link, body: { appendChild() {} } },
    window: picker ? { showSaveFilePicker: picker } : {},
    ExerciseCredentials: { makeEnv }, Blob,
    URL: { createObjectURL: () => 'blob:exercise', revokeObjectURL() {} },
    setTimeout: callback => callback()
  });
  return { elements, link, submit: () => submit({ preventDefault() {} }) };
}

test('opslaanvenster schrijft en sluit .env', async () => {
  let written, closed = false;
  const app = browser(async () => ({ name: '.env', createWritable: async () => ({
    write: async content => { written = content; }, close: async () => { closed = true; }
  }) }));
  await app.submit();
  assert.equal(written, makeEnv('OEFEN-test', true));
  assert.equal(closed, true);
  assert.match(app.elements.status.textContent, /Opgeslagen/);
  assert.equal(app.elements.button.disabled, false);
});

test('verkeerde bestandsnaam wordt niet beschreven', async () => {
  const app = browser(async () => ({ name: '.env.txt', createWritable() { assert.fail('Mag niet schrijven'); } }));
  await app.submit();
  assert.match(app.elements.status.textContent, /niets geschreven/);
});

test('annuleren en schrijffout laten opnieuw proberen toe', async () => {
  for (const name of ['AbortError', 'NotAllowedError']) {
    const app = browser(async () => { const error = new Error('Geen toegang'); error.name = name; throw error; });
    await app.submit();
    assert.match(app.elements.status.textContent, name === 'AbortError' ? /geannuleerd/ : /niet gelukt/);
    assert.equal(app.elements.button.disabled, false);
  }
});

test('downloadfallback noemt noodzakelijke verplaatsing', async () => {
  const app = browser();
  await app.submit();
  assert.equal(app.link.download, '.env');
  assert.equal(app.link.clicked, true);
  assert.match(app.elements.status.textContent, /Verplaats/);
});

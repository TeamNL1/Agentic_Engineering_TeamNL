const { test } = require('node:test');
const assert = require('node:assert/strict');
const { makeEnv } = require('../src/credentials.js');

test('slaat beide ingevulde velden op als nepcredentials', () => {
  const result = makeEnv('nep-mascotte', 'nep-pannenkoek');
  assert.match(result, /DEMO_USERNAME="nep-mascotte"\n/);
  assert.match(result, /DEMO_PASSWORD="nep-pannenkoek"\n$/);
  assert.equal(result.split('\n').filter(line => line && !line.startsWith('#')).length, 2);
});

test('weigert lege invoer en dotenv-injectie in beide velden', () => {
  for (const input of ['', '   ', 'x\nADMIN=true', 'x\rADMIN=true', '"test"', '${TOKEN}', 'naam@example.com', 'x'.repeat(81), null]) {
    assert.throws(() => makeEnv(input, 'nep-pannenkoek'), String(input));
    assert.throws(() => makeEnv('nep-cursist', input), String(input));
  }
});

test('accepteert maximaal 80 tekens per veld zonder verplicht voorvoegsel', () => {
  assert.doesNotThrow(() => makeEnv('x'.repeat(80), 'y'.repeat(80)));
  assert.doesNotThrow(() => makeEnv('cursist_1', 'een verzonnen boodschap'));
});

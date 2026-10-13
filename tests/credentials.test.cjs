const { test } = require('node:test');
const assert = require('node:assert/strict');
const { makeEnv } = require('../src/credentials.js');

test('maakt twee herkenbare nepcredentials met afsluitende newline', () => {
  const result = makeEnv('OEFEN-de-mascotte-eet-pannenkoeken', true);
  assert.match(result, /DEMO_USERNAME="nep-cursist"\n/);
  assert.match(result, /DEMO_PASSWORD="OEFEN-de-mascotte-eet-pannenkoeken"\n$/);
  assert.equal(result.split('\n').filter(line => line && !line.startsWith('#')).length, 2);
});

test('weigert zonder expliciete bevestiging', () => {
  assert.throws(() => makeEnv('OEFEN-hallo', false));
});

test('weigert lege invoer, ontbrekend voorvoegsel en dotenv-injectie', () => {
  for (const input of ['', 'OEFEN-', 'wachtwoord', 'OEFEN-x\nADMIN=true', 'OEFEN-x\rADMIN=true', 'OEFEN-"test"', 'OEFEN-${TOKEN}', 'OEFEN-naam@example.com', 'OEFEN-' + 'x'.repeat(75), null]) {
    assert.throws(() => makeEnv(input, true), String(input));
  }
});

test('accepteert maximaal 80 tekens', () => {
  assert.doesNotThrow(() => makeEnv('OEFEN-' + 'x'.repeat(74), true));
});

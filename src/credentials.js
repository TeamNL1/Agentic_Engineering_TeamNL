/* Classic script: works via file:// without a server or build step. */
(function (root) {
  'use strict';

  function makeEnv(account, password) {
    for (const value of [account, password]) {
      if (typeof value !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9 _-]{0,79}$/.test(value)) {
        throw new Error('Vul beide velden in met maximaal 80 tekens. Begin met een letter of cijfer; gebruik letters, cijfers, spaties, streepjes of underscores.');
      }
    }
    return '# ALLEEN OEFENGEGEVENS - geen echte credentials!\n'
      + '# Leesbare tekst, geen versleuteling. Houd dit bestand buiten Git.\n'
      + 'DEMO_USERNAME="' + account + '"\n'
      + 'DEMO_PASSWORD="' + password + '"\n';
  }

  root.ExerciseCredentials = { makeEnv };
  if (typeof module !== 'undefined') module.exports = { makeEnv };
})(globalThis);

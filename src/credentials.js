/* Classic script: works via file:// without a server or build step. */
(function (root) {
  'use strict';

  function makeEnv(message, confirmed) {
    if (!confirmed) throw new Error('Bevestig eerst dat je alleen verzonnen gegevens gebruikt.');
    if (typeof message !== 'string' || !/^OEFEN-[A-Za-z0-9][A-Za-z0-9 -]{0,73}$/.test(message)) {
      throw new Error('Begin met OEFEN- en voeg een verzonnen boodschap toe. Gebruik alleen letters, cijfers, spaties en streepjes; maximaal 80 tekens.');
    }
    return '# ALLEEN OEFENGEGEVENS - geen echte credentials!\n'
      + '# Leesbare tekst, geen versleuteling. Houd dit bestand buiten Git.\n'
      + 'DEMO_USERNAME="nep-cursist"\n'
      + 'DEMO_PASSWORD="' + message + '"\n';
  }

  root.ExerciseCredentials = { makeEnv };
  if (typeof module !== 'undefined') module.exports = { makeEnv };
})(globalThis);

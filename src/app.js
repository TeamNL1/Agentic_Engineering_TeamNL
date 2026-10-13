'use strict';

const form = document.getElementById('secret-form');
const status = document.getElementById('status');
const button = form.querySelector('button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = '';
  button.disabled = true;
  try {
    const contents = ExerciseCredentials.makeEnv(
      document.getElementById('secret').value,
      document.getElementById('fictional').checked
    );
    if (typeof window.showSaveFilePicker === 'function') {
      const handle = await window.showSaveFilePicker({ suggestedName: '.env' });
      if (handle.name !== '.env') {
        status.textContent = 'Kies exact de bestandsnaam .env zodat de Git-oefening klopt. Er is niets geschreven; probeer opnieuw.';
        return;
      }
      const writable = await handle.createWritable();
      await writable.write(contents);
      await writable.close();
      status.textContent = 'Opgeslagen als .env! Staat het naast index.html? Controleer nu met git status --short en git check-ignore .env dat Git het negeert.';
    } else {
      const url = URL.createObjectURL(new Blob([contents], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = '.env';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      status.textContent = 'Download aangevraagd. Verplaats het bestand vanuit Downloads naar de map met index.html en geef het exact de naam .env (zonder .txt of volgnummer). Zie README.md als het bestand verborgen is.';
    }
  } catch (error) {
    status.textContent = error.name === 'AbortError'
      ? 'Opslaan geannuleerd. Je kunt het opnieuw proberen.'
      : 'Opslaan niet gelukt. ' + error.message;
  } finally {
    button.disabled = false;
  }
});

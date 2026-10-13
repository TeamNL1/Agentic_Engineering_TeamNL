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
      document.getElementById('account').value,
      document.getElementById('secret').value
    );
    if (typeof window.showSaveFilePicker === 'function') {
      const handle = await window.showSaveFilePicker({ suggestedName: '.env' });
      if (handle.name !== '.env') {
        status.textContent = 'Gebruik de bestandsnaam .env. Er is niets geschreven.';
        return;
      }
      const writable = await handle.createWritable();
      await writable.write(contents);
      await writable.close();
      status.textContent = 'Opgeslagen als .env. Bewaar het bestand in de repomap naast index.html.';
    } else {
      const url = URL.createObjectURL(new Blob([contents], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = '.env';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      status.textContent = 'Download aangevraagd. Verplaats het bestand naar de repomap met de naam .env. Raadpleeg README.md voor instructies.';
    }
  } catch (error) {
    status.textContent = error.name === 'AbortError'
      ? 'Opslaan geannuleerd.'
      : 'Opslaan niet gelukt. ' + error.message;
  } finally {
    button.disabled = false;
  }
});

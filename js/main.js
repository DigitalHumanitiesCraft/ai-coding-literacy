/* AI Coding Literacy – JavaScript
   Minimal: nur Code-Kopieren
   < 20 Zeilen */

function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').innerText;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.innerText;
    button.innerText = 'kopiert!';
    setTimeout(() => {
      button.innerText = originalText;
    }, 2000);
  });
}

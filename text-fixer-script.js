// script.js
document.addEventListener('DOMContentLoaded', function() {
  const inputText = document.getElementById('inputText');
  const fixAndCopyBtn = document.getElementById('fixAndCopyBtn');
  const resetBtn = document.getElementById('resetBtn');
  const previewOutput = document.getElementById('previewOutput');

  fixAndCopyBtn.addEventListener('click', function() {
    let textToFix = inputText.value;
    let fixedText = TextFixer.fix(textToFix); // Asumsi TextFixer.fix mengembalikan string
    previewOutput.textContent = fixedText;

    // Salin ke clipboard
    navigator.clipboard.writeText(fixedText).then(() => {
      alert('Teks berhasil diperbaiki dan disalin!');
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
    });
  });

  resetBtn.addEventListener('click', function() {
    inputText.value = '';
    previewOutput.textContent = '';
  });
});

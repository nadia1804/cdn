// Isi dari text-fixer-script.js (yang akan diakses dari CDN)

// Definisikan TextFixer dan fungsi fix-nya di sini
const TextFixer = {
  fix: function(text) {
    let fixed = text.replace(/[^a-zA-Z0-9\s.,?!]/g, ''); // Hapus sebagian besar karakter khusus
    fixed = fixed.replace(/\s\s+/g, ' '); // Ganti spasi ganda dengan spasi tunggal
    return fixed.trim(); // Hapus spasi di awal/akhir
  }
};

// Setelah TextFixer didefinisikan, tambahkan logika interaksi UI di sini
document.addEventListener('DOMContentLoaded', function() {
  const inputText = document.getElementById('inputText');
  const fixAndCopyBtn = document.getElementById('fixAndCopyBtn');
  const resetBtn = document.getElementById('resetBtn');
  const previewOutput = document.getElementById('previewOutput');

  fixAndCopyBtn.addEventListener('click', function() {
    let textToFix = inputText.value;
    let fixedText = TextFixer.fix(textToFix); // Gunakan TextFixer yang sudah didefinisikan di atas
    
    previewOutput.textContent = fixedText;

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

// Isi dari text-fixer-script.js (akan diakses dari CDN)

// Definisikan TextFixer dan fungsi fix-nya di sini
const TextFixer = {
  fix: function(text) {
    // Logika perbaikan teks:
    // 1. Hapus sebagian besar karakter khusus kecuali alfanumerik, spasi, dan beberapa tanda baca
    let fixed = text.replace(/[^a-zA-Z0-9\s.,?!]/g, '');
    // 2. Ganti spasi ganda atau lebih dengan spasi tunggal
    fixed = fixed.replace(/\s\s+/g, ' ');
    // 3. Hapus spasi di awal/akhir teks
    return fixed.trim();
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

    // Salin hasil teks yang diperbaiki ke clipboard
    navigator.clipboard.writeText(fixedText).then(() => {
      alert('Teks berhasil diperbaiki dan disalin!');
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
    });
  });

  resetBtn.addEventListener('click', function() {
    inputText.value = ''; // Kosongkan input teks
    previewOutput.textContent = ''; // Kosongkan area pratinjau
  });
});

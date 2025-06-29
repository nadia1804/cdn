const TextFixer = {
  fix: function(text) {
    // Ini adalah logika perbaikan teks Anda.
    // Misalnya, membersihkan spasi ganda, karakter aneh, dll.
    let fixed = text.replace(/[^a-zA-Z0-9\s.,?!]/g, ''); // Hapus sebagian besar karakter khusus
    fixed = fixed.replace(/\s\s+/g, ' '); // Ganti spasi ganda dengan spasi tunggal
    return fixed.trim(); // Hapus spasi di awal/akhir
  }
};

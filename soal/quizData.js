// quizData.js
// Objek untuk menyimpan jawaban benar dan umpan balik untuk semua soal
const quizData = {
    1: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Apersepsi adalah kegiatan awal dalam pembelajaran yang bertujuan untuk menyiapkan mental dan menarik perhatian peserta didik agar siap menerima materi baru. Dalam konteks soal ini, guru menggunakan video singkat tentang kehidupan Majapahit sebagai apersepsi. Tujuan utamanya adalah membangkitkan minat peserta didik, mengaitkan materi baru (kerajaan Majapahit) dengan pengetahuan awal yang sudah mereka miliki, dan menciptakan jembatan antara pengalaman sebelumnya dengan materi yang akan diajarkan, sehingga mereka siap untuk pembelajaran yang lebih mendalam.",
        feedbackIncorrect: {
            A: "**Kurang Tepat.** Mengisi waktu awal pelajaran agar peserta didik tidak bosan bukanlah tujuan utama apersepsi. Tujuan utamanya adalah menghubungkan materi dengan pengetahuan awal. Jawaban yang benar adalah C.",
            B: "**Kurang Tepat.** Membuat peserta didik merasa santai agar guru bisa lebih fokus mengajar bukanlah tujuan utama apersepsi. Tujuan utamanya adalah menghubungkan materi dengan pengetahuan awal. Jawaban yang benar adalah C.",
            D: "**Kurang Tepat.** Menguji pemahaman peserta didik tentang teknologi modern dan kuno bukan tujuan apersepsi. Tujuan utamanya adalah menghubungkan materi dengan pengetahuan awal. Jawaban yang benar adalah C.",
            E: "**Kurang Tepat.** Menunjukkan keterampilan teknologi guru kepada peserta didik bukanlah tujuan apersepsi. Tujuan utamanya adalah menghubungkan materi dengan pengetahuan awal. Jawaban yang benar adalah C."
        }
    },
    8: {
        type: 'multiple',
        correctAnswers: ['B', 'C', 'D'], // Jawaban yang benar dari file: Q Peserta didik mengumpulkan artikel, Peserta didik datang ke perpustakaan, Peserta didik melakukan diskusi
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Langkah-langkah desain pembelajaran yang berpusat pada peserta didik untuk tujuan 'mini riset melalui literatur' harus menekankan pada pencarian dan pengolahan informasi dari sumber tertulis secara mandiri. Mengumpulkan artikel jurnal dan melakukan kajian pustaka adalah yang paling sesuai. Mendatangi perpustakaan dan membuat resume juga relevan karena melibatkan akses ke sumber informasi dan pengolahan data oleh peserta didik, meskipun mendengarkan penjelasan pustakawan bukan riset literatur langsung. Diskusi juga mendukung proses ini.",
        feedbackIncorrect: "**Ada beberapa yang perlu dikoreksi.** Untuk tujuan 'mini riset melalui literatur', langkah yang paling tepat adalah **Peserta didik mengumpulkan artikel jurnal, Peserta didik datang ke perpustakaan dan mendengarkan penjelasan, dan Peserta didik melakukan diskusi**. Pilihan A (menulis rangkuman dari film) dan E (kunjungan lapangan) kurang berfokus pada riset literatur."
    },
    24: {
        type: 'true/false-table',
        // Jawaban yang benar untuk setiap opsi (A, B, C, D, E)
        // 'Benar' berarti opsi tersebut adalah urutan yang benar
        // 'Salah' berarti opsi tersebut adalah urutan yang salah
        correctAnswers: {
            '24-A': 'Salah',
            '24-B': 'Benar', // Jawaban yang Benar dari file: 2 4 3 1
            '24-C': 'Salah',
            '24-D': 'Salah',
            '24-E': 'Salah'
        },
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar!** Urutan penyusunan tujuan pembelajaran yang mencerminkan proses berpikir kronologis dan logis dalam sejarah dimulai dengan mendeskripsikan perkembangan suatu kerajaan (2), kemudian mengidentifikasi faktor-faktor yang mendorong perkembangannya (4). Setelah itu, penting untuk memahami pengaruh letak geografis terhadap corak kehidupan (3), yang seringkali menjadi faktor pendukung atau penghambat. Terakhir, barulah mengidentifikasi faktor-faktor yang mendorong keruntuhan (1), karena keruntuhan terjadi setelah perkembangan dan pengaruh faktor-faktor lainnya. Urutan ini mengikuti alur waktu dan sebab-akibat yang runtut.",
        feedbackIncorrect: "**Ada beberapa yang perlu dikoreksi.** Urutan penyusunan tujuan pembelajaran yang mencerminkan proses berpikir kronologis dan logis dalam sejarah adalah **2 4 3 1**. Ini dimulai dengan mendeskripsikan perkembangan, diikuti oleh faktor pendorong, pengaruh geografis, dan terakhir faktor keruntuhan. Mari kita tinjau kembali setiap pilihan Anda."
    }
};

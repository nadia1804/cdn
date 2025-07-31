// quizData.js
// Objek untuk menyimpan jawaban benar dan umpan balik untuk semua soal
const quizData = {
    1: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Apersepsi adalah kegiatan awal dalam pembelajaran yang bertujuan untuk menyiapkan mental dan menarik perhatian peserta didik agar siap menerima materi baru. Dalam konteks soal ini, guru menggunakan video singkat tentang kehidupan Majapahit sebagai apersepsi. Tujuan utamanya adalah membangkitkan minat peserta didik, mengaitkan materi baru (kerajaan Majapahit) dengan pengetahuan awal yang sudah mereka miliki, dan menciptakan jembatan antara pengalaman sebelumnya dengan materi yang akan diajarkan, sehingga mereka siap untuk pembelajaran yang lebih mendalam. Pilihan lain kurang tepat karena mengisi waktu, membuat santai, menguji pemahaman, atau menunjukkan keterampilan teknologi guru bukanlah tujuan utama dari apersepsi."
    },
    2: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk meningkatkan partisipasi peserta didik dalam diskusi kelompok, membagi kelompok berdasarkan minat mereka terhadap topik tertentu dapat secara signifikan meningkatkan keterlibatan. Ini mendorong motivasi dan rasa kepemilikan, berbeda dengan memberikan poin tambahan hanya pada kelompok aktif, mengurangi atau mengganti metode diskusi, atau mengadakan kuis dadakan yang bisa menambah tekanan."
    },
    3: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Dalam model pembelajaran discovery learning, efektivitas paling baik dievaluasi melalui pengamatan partisipasi peserta didik dalam diskusi kelas. Diskusi mencerminkan sejauh mana mereka telah mengolah informasi dan mengkonstruksi pengetahuannya sendiri. Pilihan lain kurang tepat karena tidak secara langsung mengukur pemahaman atau konstruksi pengetahuan."
    },
    4: {
        type: 'single',
        correctAnswers: ['E'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Rubrik yang paling tepat untuk mengevaluasi proyek presentasi digital yang bertujuan mengembangkan keterampilan teknis dan presentasi adalah yang berfokus pada ketepatan dan kejelasan informasi serta kemampuan presentasi. Ini mencerminkan inti dari tujuan pembelajaran, yaitu penguasaan materi dan kemampuan mengkomunikasikannya secara efektif."
    },
    5: {
        type: 'single',
        correctAnswers: ['A'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (A)!** Dalam pembelajaran berbasis masalah yang meminta peserta didik untuk meneliti dan memberikan solusi, kriteria evaluasi terbaik adalah yang berfokus pada relevansi dan efektivitas solusi yang diusulkan, didukung oleh analisis sejarah yang mendalam. Ini menunjukkan kemampuan peserta didik dalam menerapkan pemahaman sejarah untuk memecahkan masalah."
    },
    6: {
        type: 'single',
        correctAnswers: ['A'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (A)!** Untuk membuat peserta didik tertarik pada topik tentang masa kolonial, pendekatan terbaik adalah dengan membuat materi terasa lebih nyata dan relevan. Mengadakan kunjungan virtual ke situs-situs sejarah kolonial dapat memberikan pengalaman langsung yang imersif, membantu peserta didik menghubungkan peristiwa masa lalu dengan lokasi fisik saat ini."
    },
    7: {
        type: 'single',
        correctAnswers: ['E'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Untuk mengevaluasi efektivitas desain pembelajaran yang bertujuan agar peserta didik dapat menganalisis dampak perang, cara terbaik adalah dengan menilai kemampuan peserta didik dalam menghubungkan informasi latar belakang dengan analisis dampak perang yang mereka pelajari. Ini secara langsung mengukur pemahaman mendalam dan kemampuan analisis sesuai tujuan pembelajaran."
    },
    8: {
        type: 'multiple',
        correctAnswers: ['A', 'B', 'D'], // Berdasarkan teks yang diberikan di prompt terbaru
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Langkah-langkah desain pembelajaran yang berpusat pada peserta didik untuk tujuan 'mini riset melalui literatur' harus menekankan pada pencarian dan pengolahan informasi dari sumber tertulis secara mandiri. Pilihan A, B, dan D secara langsung mendukung tujuan ini dengan melibatkan peserta didik dalam proses riset, kajian pustaka, dan diskusi berbasis penelitian."
    },
    9: {
        type: 'multiple',
        correctAnswers: ['B', 'D', 'E'],
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Desain pembelajaran yang relevan dengan kondisi sekitar sekolah dan melibatkan peserta didik sebaiknya berfokus pada pendekatan yang aktif dan kontekstual. Pilihan B, D, dan E mendorong peserta didik untuk melakukan riset atau studi kasus yang berkaitan langsung dengan lingkungan mereka atau isu-isu relevan, memberdayakan mereka untuk berinteraksi dengan konten sejarah secara mendalam dan relevan."
    },
    10: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Tahap desain pembelajaran di mana guru meminta peserta didik membuat pameran untuk menampilkan hasil penelitian mereka menunjukkan bahwa guru sedang melakukan evaluasi melalui proyek kreatif dan interaktif. Pameran adalah bentuk penilaian yang memungkinkan peserta didik menunjukkan pemahaman mereka secara praktis dan interaktif, sekaligus melibatkan audiens yang lebih luas."
    },
    11: {
        type: 'single',
        correctAnswers: ['E'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Untuk menganalisis strategi perang dalam Perang Dunia II, Ensiklopedia Perang Dunia II adalah sumber belajar yang paling tepat karena menyediakan informasi komprehensif dan terstruktur mengenai berbagai aspek perang, termasuk strategi militer."
    },
    12: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Meskipun media sosial menawarkan banyak keuntungan untuk interaksi dan berbagi informasi, kelemahan utamanya dalam konteks pembelajaran adalah potensi terjadinya diskusi yang tidak terfokus dan dipenuhi dengan informasi yang tidak relevan. Hal ini dapat mengalihkan perhatian peserta didik dari tujuan pembelajaran utama."
    },
    13: {
        type: 'multiple',
        correctAnswers: ['B', 'D'],
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Untuk meningkatkan minat belajar peserta didik dalam materi perjuangan merebut kemerdekaan RI, strategi yang paling tepat adalah yang melibatkan partisipasi aktif dan interaksi. Model pembelajaran role playing (bermain peran) dan Teams Games Tournament (TGT) keduanya efektif dalam meningkatkan minat dan keterlibatan karena mendorong pengalaman langsung dan kompetisi sehat."
    },
    14: {
        type: 'single',
        correctAnswers: ['E'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Strategi yang paling tepat dalam menumbuhkan nalar kritis peserta didik dalam berpikir sejarah adalah yang melibatkan mereka secara aktif dalam menganalisis dan mensintesis. Memberikan penjelasan singkat tentang diakronik, sinkronik, kausalita, interpretasi, dan periodesasi cenderung bersifat pasif dan hanya menyampaikan informasi, bukan menumbuhkan nalar kritis secara langsung, sehingga ini adalah pengecualian."
    },
    15: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Refleksi setelah kegiatan bermain peran drama bertujuan untuk menginternalisasi nilai-nilai dan pemahaman mendalam dari pengalaman tersebut. Memberikan kesempatan kepada peserta didik untuk menuliskan pesan moral dan kesimpulan dari peristiwa yang diperankan adalah tindak lanjut yang paling tepat karena mendorong perenungan makna historis dan pengambilan pelajaran personal."
    },
    16: {
        type: 'multiple',
        correctAnswers: ['C', 'D', 'E'],
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Dalam refleksi hasil belajar, tahapan yang tepat untuk meningkatkan kualitas proses pembelajaran meliputi pengecekan pemahaman dengan pertanyaan dan penyimpulan (C), pemberian solusi dan tindak lanjut berupa tugas (D), serta penyimpulan hasil diskusi dan pemberian soal evaluasi (E). Ini menunjukkan pendekatan komprehensif dari refleksi hingga perbaikan berkelanjutan."
    },
    17: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Untuk mengajarkan perbedaan antara bangunan peninggalan kebudayaan Hindu dan Budha, penilaian tes berupa menjodohkan pernyataan bangunan Hindu dan Budha adalah jenis penilaian yang tepat. Ini secara langsung menguji kemampuan peserta didik untuk mengidentifikasi dan membedakan karakteristik spesifik dari kedua jenis bangunan tersebut."
    },
    18: {
        type: 'multiple',
        correctAnswers: ['A', 'C'],
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Untuk peserta didik dengan gaya belajar kinestetik yang terlibat dalam presentasi kelompok, asesmen yang tepat harus berfokus pada aktivitas dan interaksi langsung. Menilai keaktifan dalam diskusi dan kecakapan berbicara (A), serta kemampuan public speaking dan respons terhadap pertanyaan (C) secara langsung mengukur keterlibatan kinestetik dan keterampilan presentasi mereka."
    },
    19: {
        type: 'single',
        correctAnswers: ['C'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (C)!** Tindak lanjut dari kegiatan penilaian yang paling esensial adalah menggunakan hasil penilaian tersebut sebagai informasi untuk menyusun strategi pembelajaran berikutnya. Ini berarti guru menganalisis data penilaian untuk mengidentifikasi kekuatan dan kelemahan peserta didik, kemudian menyesuaikan metode, materi, atau pendekatan pengajaran agar lebih efektif di masa mendatang."
    },
    20: {
        type: 'single',
        correctAnswers: ['A'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (A)!** Contoh analisis perbaikan evaluasi berdasar refleksi yang tepat pada materi kerajaan Islam di Indonesia adalah memberikan tugas untuk meningkatkan pemahaman peserta didik tentang ciri-ciri bangunan Islam dan karakteristiknya dengan mereviu penelitian terkait. Ini mendorong pendalaman materi dan perbaikan pemahaman berdasarkan evaluasi sebelumnya."
    },
    21: {
        type: 'single',
        correctAnswers: ['D'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (D)!** Desain refleksi yang komprehensif dalam suatu pembelajaran dapat dilakukan dengan memberikan kesempatan peserta didik untuk memberikan sarannya serta menindaklanjuti keberatan dengan kesepakatan yang saling menguntungkan. Ini mendorong partisipasi aktif dan rasa kepemilikan siswa terhadap proses pembelajaran."
    },
    22: {
        type: 'single',
        correctAnswers: ['E'], // Jawaban berbeda dari soal 21 seperti yang diminta
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Dalam konteks refleksi komprehensif, menanyakan hal yang tidak dipahami peserta didik serta memberikan jawaban atas materi yang belum dipahaminya adalah langkah kunci untuk memastikan pemahaman menyeluruh dan mengatasi kesenjangan belajar secara langsung."
    },
    23: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk tujuan pembelajaran menganalisis dan mengevaluasi asal usul nenek moyang dan jalur rempah, penyampaian materi esensial yang harus disiapkan guru adalah informasi umum tentang rempah dan jalur rempah, serta mengapa menjadi magnet bagi bangsa Eropa. Ini memberikan konteks awal yang krusial untuk analisis lebih lanjut."
    },
    24: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Urutan penyusunan tujuan pembelajaran yang mencerminkan proses berpikir kronologis dan logis dalam sejarah dimulai dengan mendeskripsikan perkembangan suatu kerajaan (2), kemudian mengidentifikasi faktor-faktor yang mendorong perkembangannya (4). Setelah itu, penting untuk memahami pengaruh letak geografis terhadap corak kehidupan (3), yang seringkali menjadi faktor pendukung atau penghambat. Terakhir, barulah mengidentifikasi faktor-faktor yang mendorong keruntuhan (1), karena keruntuhan terjadi setelah perkembangan dan pengaruh faktor-faktor lainnya. Urutan ini mengikuti alur waktu dan sebab-akibat yang runtut."
    },
    25: {
        type: 'true/false-table',
        correctAnswers: {
            '25-A': 'Salah', // Memberikan pengayaan kepada seluruh peserta didik karena mayoritas sudah memiliki kemampuan mengidentifikasi hasil kebudayaan.
            '25-B': 'Salah', // Memberikan penjelasan tentang berbagai peninggalan masa praaksara bagi peserta didik yang belum memahami berbagai hasil budaya masa pra-aksara.
            '25-C': 'Salah', // Memberikan remedial bagi peserta didik yang belum memahami materi dengan cara memberikan soal-soal tambahan tentang peninggalan masa pra-aksara.
            '25-D': 'Benar', // Menjadikan peserta didik yang sudah memahami sebagai tutor untuk mendampingi teman-temannya yang masih belum paham tentang hasil kebudayaan masa pra-aksara.
            '25-E': 'Salah'  // Memberikan kesempatan peserta didik yang sudah memahami untuk belajar mandiri membuat timeline hasil budaya masa pra-aksara dari periode ke periode.
        },
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar!** Dalam menghadapi keberagaman kecepatan belajar siswa, sikap yang paling tepat adalah memanfaatkan potensi siswa yang lebih cepat memahami. Menjadikan peserta didik yang lebih cepat memahami sebagai tutor sebaya adalah strategi yang efektif. Ini tidak hanya memberikan dukungan individual kepada siswa yang kesulitan, tetapi juga memperkuat pemahaman siswa yang menjadi tutor sebaya. Pendekatan ini mendorong kolaborasi, empati, dan pembelajaran diferensiasi di dalam kelas."
    },
    26: {
        type: 'true/false-table',
        correctAnswers: {
            '26-A': 'Salah', // Ini lebih ke remedial/tutoring, bukan pengayaan untuk yang sudah memenuhi KKTP.
            '26-B': 'Benar', // Tugas proyek penelitian mendalam adalah bentuk pengayaan.
            '26-C': 'Benar', // Bahan bacaan jurnal ilmiah adalah bentuk pengayaan untuk pendalaman.
            '26-D': 'Salah', // Penjelasan tambahan adalah remedial atau pengulangan, bukan pengayaan untuk yang sudah tuntas.
            '26-E': 'Benar'  // Studi kasus menantang adalah bentuk pengayaan.
        },
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Strategi pengayaan yang tepat untuk peserta didik yang sudah memenuhi kriteria ketercapaian tujuan pembelajaran adalah memberikan tantangan lebih lanjut yang memperdalam pemahaman mereka. Memberikan tugas proyek penelitian mendalam, bahan bacaan jurnal ilmiah, dan studi kasus yang menantang adalah cara efektif untuk mendorong mereka melampaui standar awal."
    },
    27: {
        type: 'single',
        correctAnswers: ['A'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (A)!** Jika mayoritas peserta didik belum memenuhi kriteria tujuan pembelajaran, strategi yang paling tepat adalah melakukan remidi. Memberikan contoh biografi yang baik dan membahas elemen pentingnya secara langsung mengatasi kesenjangan pemahaman dan keterampilan yang dibutuhkan."
    },
    28: {
        type: 'single',
        correctAnswers: ['D'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (D)!** Tradisi Tabuik adalah bagian dari sejarah lokal dan budaya. Konten yang paling tepat untuk dikembangkan dalam pembelajaran sejarah adalah meminta peserta didik mengidentifikasi nilai-nilai sejarah yang terkandung dalam tradisi tersebut. Ini menghubungkan sejarah dengan konteks budaya dan kehidupan nyata mereka."
    },
    29: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk mengakomodasi gaya belajar visual (75%) dan auditori (25%), memanfaatkan infografik (visual) yang dipadukan dengan story telling oleh guru (auditori) adalah sumber belajar yang paling sesuai. Ini memenuhi kebutuhan kedua gaya belajar secara bersamaan."
    },
    30: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk peserta didik yang lamban belajar (slow learner), bahan ajar yang sesuai harus sederhana, konkret, dan menarik secara visual. Cerita bergambar tentang hasil kebudayaan masa pra-aksara sangat efektif karena memvisualisasikan konsep kompleks menjadi format yang lebih mudah dicerna dan diingat."
    },
    31: {
        type: 'single',
        correctAnswers: ['B'], // Sama dengan soal 30
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk peserta didik yang lamban belajar (slow learner), bahan ajar yang sesuai harus sederhana, konkret, dan menarik secara visual. Cerita bergambar tentang hasil kebudayaan masa pra-aksara sangat efektif karena memvisualisasikan konsep kompleks menjadi format yang lebih mudah dicerna dan diingat."
    },
    32: {
        type: 'single',
        correctAnswers: ['E'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (E)!** Jika tujuan pembelajaran adalah 'menganalisis proses penelitian sejarah', maka materi esensial yang paling sesuai adalah 'Jenis dan karakteristik sumber sejarah'. Memahami sumber sejarah adalah fondasi utama dalam melakukan penelitian sejarah yang valid dan akurat."
    },
    33: {
        type: 'multiple',
        correctAnswers: ['A', 'B', 'C'],
        feedbackCorrect: "**Hebat! Jawaban Anda Benar!** Konsep diakronis dalam sejarah berkaitan dengan urutan waktu dan perkembangan peristiwa. Strategi yang tepat untuk mengukurnya adalah dengan meminta peserta didik membuat garis waktu (timeline) atau pameran yang menunjukkan perkembangan kronologis suatu peristiwa atau zaman. Pilihan A, B, dan C semuanya melibatkan penyusunan urutan waktu peristiwa."
    },
    34: {
        type: 'single',
        correctAnswers: ['B'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (B)!** Untuk meningkatkan motivasi belajar pada materi asal usul nenek moyang, sumber belajar yang paling tepat adalah yang konkret dan menarik secara visual. Museum Sangiran (1) menawarkan pengalaman langsung, Fosil binatang purba (3) adalah bukti fisik, dan Foto Homo Sapiens (5) memberikan visualisasi langsung, sehingga ketiganya sangat memotivasi."
    },
    35: {
        type: 'single',
        correctAnswers: ['D'],
        feedbackCorrect: "**Tepat Sekali! Jawaban Anda Benar (D)!** Untuk mengembangkan literasi digital peserta didik pada materi Pergerakan Nasional, upaya yang paling tepat adalah melakukan virtual tour di Museum Sumpah Pemuda. Ini secara langsung melibatkan penggunaan teknologi digital untuk mengakses dan memahami konten sejarah, sekaligus relevan dengan topik."
    }
};

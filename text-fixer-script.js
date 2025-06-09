<script>
    function fixText() {
        const inputTextElement = document.getElementById('inputText');
        const outputDivElement = document.getElementById('outputDiv');

        if (inputTextElement && outputDivElement) {
            let originalText = inputTextElement.value;
            let fixedText = originalText.replace(/\s+/g, ' ').trim();
            outputDivElement.textContent = fixedText;
            document.getElementById('copyFeedback').textContent = ''; // Hapus feedback sebelumnya
        } else {
            console.error('Elemen input atau output tidak ditemukan.');
        }
    }

    function copyToClipboard() {
        const outputDivElement = document.getElementById('outputDiv');
        const copyFeedbackElement = document.getElementById('copyFeedback');

        if (outputDivElement && copyFeedbackElement) {
            const textToCopy = outputDivElement.textContent;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                // Gunakan Clipboard API modern
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        copyFeedbackElement.textContent = 'Teks berhasil disalin!';
                        setTimeout(() => { copyFeedbackElement.textContent = ''; }, 2000); // Hapus setelah 2 detik
                    })
                    .catch(err => {
                        console.error('Gagal menyalin teks: ', err);
                        copyFeedbackElement.textContent = 'Gagal menyalin teks.';
                    });
            } else {
                // Fallback untuk browser lama
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = textToCopy;
                tempTextArea.style.position = 'fixed'; // Agar tidak mengganggu layout
                tempTextArea.style.left = '-9999px'; // Pindahkan ke luar layar
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                try {
                    document.execCommand('copy');
                    copyFeedbackElement.textContent = 'Teks berhasil disalin! (fallback)';
                    setTimeout(() => { copyFeedbackElement.textContent = ''; }, 2000);
                } catch (err) {
                    console.error('Gagal menyalin teks (fallback): ', err);
                    copyFeedbackElement.textContent = 'Gagal menyalin teks. Browser Anda tidak mendukung salin otomatis.';
                } finally {
                    document.body.removeChild(tempTextArea);
                }
            }
        } else {
            console.error('Elemen output atau feedback tidak ditemukan.');
        }
    }
</script>

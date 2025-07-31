// quizLogic.js
// Fungsi untuk menampilkan umpan balik
function showFeedback(questionId, isCorrect, feedbackText) {
    const feedbackBox = document.getElementById(`feedback-${questionId}`);
    feedbackBox.innerHTML = feedbackText;
    feedbackBox.style.display = 'block'; // Memastikan kotak umpan balik terlihat

    // Mengatur warna latar belakang umpan balik
    if (isCorrect) {
        feedbackBox.classList.remove('soal-bg-red-100');
        feedbackBox.classList.add('soal-bg-green-100');
    } else {
        feedbackBox.classList.remove('soal-bg-green-100');
        feedbackBox.classList.add('soal-bg-red-100');
    }
}

// Fungsi untuk menonaktifkan semua item jawaban dan tombol submit (jika ada)
function disableQuestion(questionId) {
    const questionContainer = document.getElementById(`quiz-${questionId}`);
    const answerItems = questionContainer.querySelectorAll('.soal-answer-item');
    answerItems.forEach(item => {
        item.classList.add('disabled');
        item.style.pointerEvents = 'none'; // Menonaktifkan klik
    });
    const tfOptions = questionContainer.querySelectorAll('.soal-tf-option');
    tfOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none'; // Menonaktifkan klik
    });
    const submitBtnSingle = questionContainer.querySelector('.submit-multiple-btn'); // For multiple choice
    if (submitBtnSingle) {
        submitBtnSingle.disabled = true;
        submitBtnSingle.classList.add('disabled');
    }
    const submitBtnTable = questionContainer.querySelector('.submit-tf-table-btn'); // For true/false table
    if (submitBtnTable) {
        submitBtnTable.disabled = true;
        submitBtnTable.classList.add('disabled');
    }
}

// Inisialisasi semua soal
document.querySelectorAll('.pilihan-soal').forEach(pilihanSoalDiv => {
    const questionId = pilihanSoalDiv.dataset.questionId;
    const questionType = pilihanSoalDiv.dataset.type;
    const data = quizData[questionId]; // quizData sekarang diakses sebagai variabel global dari HTML

    if (questionType === 'single') {
        const answerItems = pilihanSoalDiv.querySelectorAll('.soal-answer-item');
        answerItems.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return;

                const selectedValue = this.dataset.value;
                const isCorrect = data.correctAnswers.includes(selectedValue);

                if (isCorrect) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                    const correctAnswerItem = Array.from(answerItems).find(item => data.correctAnswers.includes(item.dataset.value));
                    if (correctAnswerItem) {
                        correctAnswerItem.classList.add('correct');
                    }
                }
                showFeedback(questionId, isCorrect, isCorrect ? data.feedbackCorrect : (data.feedbackIncorrect[selectedValue] || data.feedbackIncorrect));
                disableQuestion(questionId);
            });
        });
    } else if (questionType === 'multiple') {
        const answerItems = pilihanSoalDiv.querySelectorAll('.soal-answer-item');
        const submitBtn = pilihanSoalDiv.querySelector('.submit-multiple-btn');

        answerItems.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return;
                this.classList.toggle('selected');
            });
        });

        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                if (this.disabled) return;

                const selectedValues = Array.from(answerItems)
                                            .filter(item => item.classList.contains('selected'))
                                            .map(item => item.dataset.value);

                const isCorrect = selectedValues.length === data.correctAnswers.length &&
                                  data.correctAnswers.every(val => selectedValues.includes(val)) &&
                                  selectedValues.every(val => data.correctAnswers.includes(val));

                answerItems.forEach(item => {
                    const itemValue = item.dataset.value;
                    const isSelected = item.classList.contains('selected');
                    const isActuallyCorrect = data.correctAnswers.includes(itemValue);

                    if (isSelected && isActuallyCorrect) {
                        item.classList.add('correct');
                    } else if (isSelected && !isActuallyCorrect) {
                        item.classList.add('incorrect');
                    } else if (!isSelected && isActuallyCorrect) {
                        item.classList.add('correct');
                        item.style.opacity = '0.6';
                    }
                });

                showFeedback(questionId, isCorrect, isCorrect ? data.feedbackCorrect : data.feedbackIncorrect);
                disableQuestion(questionId);
            });
        }
    } else if (questionType === 'true/false-table') {
        const submitBtn = pilihanSoalDiv.querySelector('.submit-tf-table-btn');

        pilihanSoalDiv.querySelectorAll('.soal-tf-option').forEach(button => {
            button.addEventListener('click', function() {
                if (this.classList.contains('disabled')) return;

                const parentRow = this.closest('.soal-statement-row');
                parentRow.querySelectorAll('.soal-tf-option').forEach(btn => {
                    btn.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });

        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                if (this.disabled) return;

                let allCorrect = true;
                let feedbackMessage = "";

                pilihanSoalDiv.querySelectorAll('.soal-statement-row').forEach(row => {
                    const statementId = row.dataset.statementId;
                    const selectedOption = row.querySelector('.soal-tf-option.selected');
                    const userAnswer = selectedOption ? selectedOption.dataset.value : null;
                    const correctExpectedAnswer = data.correctAnswers[statementId];

                    row.querySelectorAll('.soal-tf-option').forEach(btn => {
                        btn.classList.add('disabled');
                        if (btn.dataset.value === correctExpectedAnswer) {
                            btn.classList.add('correct');
                        } else if (btn.classList.contains('selected') && btn.dataset.value !== correctExpectedAnswer) {
                            btn.classList.add('incorrect');
                        }
                    });

                    if (userAnswer !== correctExpectedAnswer) {
                        allCorrect = false;
                    }
                });

                if (allCorrect) {
                    feedbackMessage = data.feedbackCorrect;
                } else {
                    feedbackMessage = data.feedbackIncorrect;
                }

                showFeedback(questionId, allCorrect, feedbackMessage);
                disableQuestion(questionId);
            });
        }
    }
});

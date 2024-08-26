document.addEventListener('DOMContentLoaded', function() {
    const clues = [
        { clue: "GHSGAFHJ", answer: "SNODGRASS" },
        { clue: "-37.791669520072645, 144.96187222512796", answer: "Kaz" },
        { clue: '<img src="image.png" alt="Clue Image"><p>What\'s the 4th word on the plaque of the statue?</p>', answer: "Horse" },
        { clue: "America Canada Mexico India", answer: "Max" },
        { clue: '<audio controls><source src="clue.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>', answer: "3 Burgers" },
        { clue: "Triangle between Hospital, Fitzroy Gardens, Southern Cross Station", answer: "Shot Tower" },
        { clue: "The 3rd word on the plaque beneath the Dark Knight", answer: "Melbourne" },
        { clue: "Janet Clarke Bible", answer: null }
    ];

    let currentClueIndex = 0;

    function displayClue() {
        const currentClue = clues[currentClueIndex];
        document.getElementById('clue').innerHTML = currentClue.clue;
        if (currentClue.answer === null) {
            document.getElementById('input-container').style.display = 'none';
        } else {
            document.getElementById('input-container').style.display = 'block';
            document.getElementById('answer').value = '';
            document.getElementById('answer').focus();
        }
        document.getElementById('error-message').textContent = '';
    }

    function checkAnswer() {
        const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
        const correctAnswer = clues[currentClueIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            currentClueIndex++;
            if (currentClueIndex < clues.length) {
                displayClue();
            } else {
                document.getElementById('clue').textContent = 'Congratulations! You have completed the scavenger hunt!';
                document.getElementById('input-container').style.display = 'none';
            }
        } else {
            document.getElementById('error-message').textContent = 'Incorrect answer, try again!';
        }
    }

    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    document.getElementById('answer').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    displayClue();
});

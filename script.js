document.addEventListener('DOMContentLoaded', function() {
    const clues = [
        { clue: "Uncover the Location; the fifth word on the location will guide you?", answer: "Parramatta" },
        { clue: '<img src="newimage.png" alt="Clue Picture - Msg Lucas if you cant see it"><p>Who is he pointing at?</p>', answer: "St George" },
        { clue: "Go to the State Library and Find Lucas for your next Challenge", answer: "ACMI" },
        { clue: '<img src="PACMAN.png" alt="Clue Image - Msg Lucas if you cant see it"><p>Explore the depths of ACMI to uncover this arcade machine. Achieve a score of 1000 points. Your clue lies in the word inscribed in the top right corner of the machine</p>', answer: "Midway" },
        { clue: '<audio controls><source src="clue.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>', answer: "3 Burgers" },
        { clue: "Shot In the Dark Triangle between Hospital, Fitzroy Gardens, Southern Cross Station", answer: "Shot Tower" },
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

// unordered list where guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");

//button with text "Guess"
const guessLetterButton = document.querySelector(".guess");

//text input where player will guess a letter
const letterInput = document.querySelector(".letter");

//empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");

//paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");

//span inside the paragraph where the remaining guesses will display
const spanRemaining = document.querySelector(".remaining span");

//empty paragraph where messages will appera when the player guesses a letter
const message = document.querySelector(".message");

//hidden button that will appear prompting the player to play again
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    };
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});
 

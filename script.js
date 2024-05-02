// Array of words for the game
const words = ["apple", "banana", "orange", "grape", "kiwi"];

// Randomly select a word from the array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Array to store correct guesses
let guessedWord = Array(selectedWord.length).fill("_");

// Display initial state of the word
const wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = guessedWord.join(" ");

// Get user input and handle guesses
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");

guessButton.addEventListener("click", function () {
  const guess = guessInput.value.trim().toLowerCase();

  // Check if the guess is a single letter
  if (guess.length !== 1) {
    message.textContent = "Please enter a single letter guess.";
    return;
  }

  // Check if the guess is correct
  let correctGuess = false;
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guess) {
      guessedWord[i] = guess;
      correctGuess = true;
    }
  }

  // Update the display with the guessed word
  wordDisplay.textContent = guessedWord.join(" ");

  // Check if the word is completely guessed
  if (guessedWord.join("") === selectedWord) {
    message.textContent = "Congratulations! You guessed the word.";
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else {
    // Provide feedback to the user
    if (correctGuess) {
      message.textContent = "Good guess! Keep going.";
    } else {
      message.textContent = "Oops! Try another letter.";
    }
  }

  // Clear the input field
  guessInput.value = "";
});

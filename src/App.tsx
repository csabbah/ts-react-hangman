import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // This function will ONLY rerun IF new data is added to the state object
  const addGuessedLetter = useCallback(
    (letter: string) => {
      // If the letter we guessed is already in our array, return nothing
      if (guessedLetters.includes(letter)) return;

      // Else, add it to our array
      setGuessedLetters((prevArr) => [...prevArr, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      // If nothing matches, return nothing (cancel the function)
      if (!key.match(/^[a-z]$/)) return;
      // If it matches anything from a to z, add it to our guessed letter function
      e.preventDefault();
      addGuessedLetter(key);
    };
    // Hooking it up and removing it appropriately
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };

    // Anytime changes occur in the guessedLetters state, execute this useEffect
  }, [guessedLetters]);

  console.log(guessedLetters);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose win</div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard />
    </div>
  );
}

export default App;

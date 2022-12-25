import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function getWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
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

  const isLoser: boolean = inCorrectLetters.length >= 6;
  // If every iteration of this loop returns true, the entirety of the function is true
  const isWinner: boolean = wordToGuess.split("").every((letter) => {
    // If all the guessLetters include the letter in the wordToGuess
    // Then we have won
    return guessedLetters.includes(letter);
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // If either or is true (meaning game is over), don't execute callback
      if (isLoser || isWinner) return;

      // If nothing matches, return nothing (cancel the function)
      if (!key.match(/^[a-z]$/)) return;

      // If it matches anything from a to z, add it to our guessed letter function
      addGuessedLetter(key);
    };
    // Hooking it up and removing it appropriately
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };

    // Anytime changes occur in the guessedLetters state, execute this useEffect
  }, [guessedLetters]);

  function resetGame(): void {
    setWordToGuess(getWord());
    setGuessedLetters([]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault();
      const key = e.key;

      if (key !== "Enter") return;

      setWordToGuess(getWord());
      setGuessedLetters([]);
    };
    // Hooking it up and removing it appropriately
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: isLoser ? "red" : isWinner ? "green" : "",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {(isWinner && (
          <>
            You win!<br></br> Press Enter or hit Play again
          </>
        )) ||
          (isLoser && (
            <>
              You lose!<br></br> Press Enter or hit Play again
            </>
          ))}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetter={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        resetGame={resetGame}
        inactiveLetters={inCorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;

import styles from "./word.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span
            className={styles.word}
            style={{ borderBottom: ".1em solid black" }}
            key={index}
          >
            <span
              style={{
                color:
                  reveal && !guessedLetters.includes(letter)
                    ? "red"
                    : !reveal
                    ? "green"
                    : "",
                visibility:
                  // Reveal the letter if it was guessed correct OR if reveal is true
                  // reveal being true means the game is over (isLoser == true)
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

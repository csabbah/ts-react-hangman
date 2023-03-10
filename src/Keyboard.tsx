import styles from "./keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
  resetGame: () => void;
};

export function Keyboard({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  resetGame,
  disabled = false,
}: keyboardProps) {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "5px",
      }}
    >
      {disabled && (
        <button onClick={() => resetGame()} className={`${styles.playAgain}`}>
          Play Again
        </button>
      )}
      {KEYS.map((key, index) => {
        const isActive = activeLetter.includes(key);
        const inActive = inactiveLetters.includes(key);
        return (
          <button
            disabled={isActive || inActive || disabled}
            key={index}
            onClick={() => {
              addGuessedLetter(key);
            }}
            className={`${styles.btn} ${isActive && styles.active} ${
              inActive && styles.inactive
            }`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

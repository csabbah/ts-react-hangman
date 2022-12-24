import styles from "./hangman.module.css";

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: "0",
          height: "50px",
          width: "10px",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: " 10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: " 400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: " 10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
}

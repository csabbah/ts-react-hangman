import styles from "./hangman.module.css";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const HEAD = (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "25px",
      }}
    />
  );
  const BODY = (
    <div
      style={{
        width: "10px",
        height: "70px",
        background: "black",
        position: "absolute",
        top: "95px",
        right: "45px",
      }}
    />
  );
  const RIGHT_ARM = (
    <div
      style={{
        width: "50px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "-0px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );
  const LEFT_ARM = (
    <div
      style={{
        width: "50px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "50px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      style={{
        width: "50px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "155px",
        right: "5px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      style={{
        width: "50px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "155px",
        right: "45px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: "absolute",
          right: "45px",
          height: "50px",
          width: "10px",
          background: "black",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "75px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "250px",
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

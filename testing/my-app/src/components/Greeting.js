import { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState("Not Clicked");

  return (
    <div>
      <h2>Hello my fen</h2>
      <p>It's nice to see you</p>
      <p>{text}</p>
      <button onClick={() => setText("Clicked")}>Click Me</button>
    </div>
  );
};

export default Greeting;

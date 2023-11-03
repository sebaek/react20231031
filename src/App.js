import React from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  let text = "initial text";
  function handleChange(e) {
    // console.log("인풋값이 변경됨");
    console.log(e.target.value);
    text = e.target.value;
    console.log("text", text);
  }

  return (
    <div>
      <p>{text}</p>
      <Input onChange={handleChange} />
      <Input onChange={handleChange} />
    </div>
  );
}

export default App;

import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수명 작성 관습
  // handle이벤트명
  function handleClick() {
    console.log("second");
  }

  function handleMouseEnter() {
    console.log("third");
  }

  function handleMouseLeave() {
    console.log("4th");
  }

  return (
    <div>
      <Button onClick={() => console.log("first")}>버튼1</Button>
      <Button onClick={handleClick}>버튼2</Button>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        버튼3
      </Button>
    </div>
  );
}

export default App;

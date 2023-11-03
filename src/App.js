import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  let [number, setNumber] = useState(0);

  function handleClick() {
    // number++;
    setNumber(number + 1);
  }
  return (
    <div>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;

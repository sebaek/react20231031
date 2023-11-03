import React, { useState } from "react";
import { NumberInput, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  const isOdd = number % 2 == 1;

  function handleInputChange(e) {
    setNumber(Number(e.target.value));
  }

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <Text>
        {isOdd && "홀수"}
        {isOdd || "짝수"}
      </Text>
    </div>
  );
}

export default App;

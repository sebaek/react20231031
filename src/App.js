import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function handleButtonClick() {
    setNumber(number + 1);
  }

  function handleMinusButtonClick() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClick}>증가</Button>
      <Button onClick={handleMinusButtonClick}>감소</Button>
    </>
  );
}

export default App;

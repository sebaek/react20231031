import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClick}>증가</Button>
    </>
  );
}

export default App;

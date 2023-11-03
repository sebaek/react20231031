import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function handleInput1Change(e) {
    setNumber1(Number(e.target.value));
  }

  function handleInput2Change(e) {
    setNumber2(Number(e.target.value));
  }

  let result = number1 + number2;

  return (
    <>
      <input type="number" onChange={handleInput1Change} /> +
      <input type="number" onChange={handleInput2Change} />= {result}
    </>
  );
}

export default App;

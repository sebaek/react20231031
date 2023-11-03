import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  const [message, setMessage] = useState("");

  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div>
      <Input onChange={handleInputChange} />
      <Text>{message}</Text>
    </div>
  );
}

export default App;

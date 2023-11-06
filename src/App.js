import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [obj, setObj] = useState({ message: "" });

  function handleObjectMessageChange(e) {
    obj.message = e.target.value;
    setObj(obj);
  }

  return (
    <>
      <Box>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <Text>{message}</Text>
      </Box>
      <Box>
        <Input value={obj.message} onChange={handleObjectMessageChange} />
        <Text>{obj.message}</Text>
      </Box>
    </>
  );
}

export default App;

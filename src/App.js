import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  console.log(number);

  const index = number % 3;

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>다음</Button>
      <Box borderWidth={"3px"} borderColor={index == 0 ? "blue" : "black"}>
        <Text>message1</Text>
      </Box>
      <Box borderWidth={"3px"} borderColor={index == 1 ? "blue" : "black"}>
        <Text>message2</Text>
      </Box>
      <Box borderWidth={"3px"} borderColor={index == 2 ? "blue" : "black"}>
        <Text>message3</Text>
      </Box>
    </div>
  );
}

export default App;

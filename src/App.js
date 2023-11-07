import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1() {
  return (
    <Box>
      <Button>텍스트 바꾸기!</Button>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");

  return (
    <div>
      <MyComp1></MyComp1>
      {/* MyComp1 에 있는 버튼이 클릭되면 */}
      <MyComp2 message={message}></MyComp2>
      {/*  MyCom2에 있는 text가 바뀌게 */}
    </div>
  );
}

export default App;

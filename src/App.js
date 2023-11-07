import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function MyInput() {
  return <Input />;
}

function MyText() {
  return <Text>메시지 출력할 위치</Text>;
}

function App(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <MyInput></MyInput>
      <MyText></MyText>
    </div>
  );
}

export default App;

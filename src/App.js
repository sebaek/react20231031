import React from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp() {
  return <Text>어떤 텍스트</Text>;
}

function AComp() {
  return <CComp />;
}

function DComp() {
  return <Input />;
}

function BComp() {
  return <DComp />;
}

function App(props) {
  return (
    <div>
      <AComp />
      <BComp />
    </div>
  );
}

export default App;

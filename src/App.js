import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ value, onChange }) {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function BComp({ value, onChange }) {
  return <DComp value={value} onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <AComp message={message} />
      <BComp value={message} onChange={(value) => setMessage(value)} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ value, onChange }) {
  return (
    <Box>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </Box>
  );
}

function MyText({ text }) {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <MyInput value={address} onChange={(text) => setAddress(text)} />
      <MyText text={address} />
      <hr />
      <MyInput value={email} onChange={(text) => setEmail(text)} />
      <MyText text={email} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const email = ""; // state로 바꾸기

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handleUserNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} />
      </Box>
      <Text>
        {username}의 email은 {email} 입니다.
      </Text>
    </div>
  );
}

export default App;

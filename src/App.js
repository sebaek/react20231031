import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handleSubmit() {
    setSubmitting(true);
    /*
    axios
      .post("/adduser", {
        name,
        email,
        password,
      })
      .then((response) => console.log("성공할 때 해야하는일"))
      .catch((error) => console.log("실패할 때 해야하는 일"))
      .finally(() => console.log("꼭 해야하는 일"));

     */
  }

  return (
    <Center>
      <Box w={"480px"}>
        <FormControl mb={5}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={handleNameInput} />
          <FormHelperText>띄어쓰기 없이 입력해주세요.</FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordInput}
          />
          <FormHelperText>
            특수기호와 숫자를 하나 이상 작성해주세요.
          </FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={handleEmailInput} />
          <FormHelperText>입력된 이메일은 중복될 수 없습니다.</FormHelperText>
        </FormControl>

        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          isLoading={submitting}
        >
          가입
        </Button>
      </Box>
    </Center>
  );
}

export default App;

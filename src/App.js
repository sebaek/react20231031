import React from "react";
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요.</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={5}>
        <Box w="480px">
          <FormControl>
            <FormLabel>하나만 선택하세요.</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Lorem.</Radio>
                <Radio value="value3">Lorem.</Radio>
                <Radio value="value4">Lorem.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box w="480px">
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="orange">Lorem.</Checkbox>
                <Checkbox colorScheme="green">Commodi.</Checkbox>
                <Checkbox colorScheme="purple">Voluptatem.</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;

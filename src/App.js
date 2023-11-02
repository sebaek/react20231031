import { Box, Center, Circle, Square } from "@chakra-ui/react";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red"} h={"200px"}>
        <Square bg={"blue"} w={"100px"} h={"100px"}>
          <ChatIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;

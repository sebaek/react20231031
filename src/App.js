import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Amet.</Box>
        <Box bg={"gray"}>Eligendi.</Box>
        <Box bg={"blue"}>Molestiae.</Box>
        <Box bg={"green"}>Qui?</Box>
      </Flex>
    </>
  );
}

export default App;

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
   */
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ base: 2, md: 3, "2xl": 6 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Sequi?</Box>
        <Box bg="blue.300">Sint!</Box>
        <Box bg="blue.300">Reiciendis!</Box>
        <Box bg="blue.300">Quo!</Box>
        <Box bg="blue.300">Harum?</Box>
        <Box bg="blue.300">Labore.</Box>
        <Box bg="blue.300">A?</Box>
        <Box bg="blue.300">Laudantium.</Box>
        <Box bg="blue.300">Facilis?</Box>
        <Box bg="blue.300">Aut.</Box>
        <Box bg="blue.300">Cupiditate?</Box>
        <Box bg="blue.300">Atque.</Box>
        <Box bg="blue.300">Autem.</Box>
        <Box bg="blue.300">Vitae!</Box>
        <Box bg="blue.300">Qui?</Box>
        <Box bg="blue.300">Possimus?</Box>
        <Box bg="blue.300">Quod.</Box>
        <Box bg="blue.300">Ipsam!</Box>
        <Box bg="blue.300">Dolores?</Box>
        <Box bg="blue.300">Qui?</Box>
        <Box bg="blue.300">Provident.</Box>
        <Box bg="blue.300">Voluptatem?</Box>
        <Box bg="blue.300">Iste?</Box>
        <Box bg="blue.300">Eos!</Box>
        <Box bg="blue.300">Alias?</Box>
        <Box bg="blue.300">Iste?</Box>
        <Box bg="blue.300">Nisi!</Box>
        <Box bg="blue.300">Atque.</Box>
        <Box bg="blue.300">Ipsum?</Box>
      </SimpleGrid>
    </>
  );
}

export default App;

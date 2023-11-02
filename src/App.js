import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"gold"} border={"1px solid purple"}>
        Lorem ipsum.
      </Box>
      <Box bg={"blue"} borderTop={"2px dotted green"}>
        Illum, officia.
      </Box>
      <Box bg={"red"} borderBottom={"7px double yellow"}>
        Dolor, nostrum.
      </Box>
      <Box borderX={"10px solid"} borderColor={"gray.600"}>
        A, asperiores?
      </Box>
      <Box borderY={"10px dotted"} borderColor={"red.300"}>
        Architecto, voluptatibus?
      </Box>
      <Box border={"5px solid blue"} borderRadius={"30px"}>
        Suscipit, ut.
      </Box>
      <Box border={"5px solid yellow"} borderRadius={"20%"}>
        Amet, nostrum!
      </Box>
      <Box border={"5px solid black"} borderRadius={5}>
        Aliquid, debitis?
      </Box>
      <Box border={"5px solid blue"} borderTopRightRadius={10}>
        Minus, vitae!
      </Box>
      <Box border={"5px solid green"} borderBottomRightRadius={10}>
        Dolores, minus.
      </Box>
      <Box border={"5px solid purple"} borderBottomLeftRadius={10}>
        Illum, maxime.
      </Box>
      <Box border={"5px solid red"} borderTopLeftRadius={10}>
        At, obcaecati.
      </Box>
      <Box shadow={"10px 5px 5px red"}>Eaque, ut?</Box>
      <Box shadow="lg">Et, totam.</Box>
      <Box shadow="xl">Eum, perferendis?</Box>
      <Box shadow="md">Atque, rerum.</Box>
      <Box bg={"blue.300"} m={"10px"}>
        Explicabo, vero?
      </Box>
      <Box bg={"yellow.600"} m={"20px"}>
        Alias, voluptates.
      </Box>
      <Box bg={"facebook.500"} mx={"70px"}>
        Quibusdam, voluptatibus.
      </Box>
      <Box bg="red.300" my="50px">
        Lorem ipsum.
      </Box>
      <Box bg="red.600" m="1">
        Lorem ipsum.
      </Box>
      <Box bg="blue.300" m="2">
        Lorem ipsum.
      </Box>
      <Box bg="gold" m={3}>
        Lorem ipsum.
      </Box>
      <Box bg="yellow.900" m="4">
        Lorem ipsum.
      </Box>
      <Box bg="gray.400" m="5">
        Lorem ipsum.
      </Box>
      <Box bg="red.400" p={"10px"}>
        Lorem ipsum.
      </Box>
      <Box bg="blue.400" px={"20px"}>
        Assumenda, iure.
      </Box>
      <Box bg="purple" py={"30px"}>
        Libero, pariatur.
      </Box>
      <Box bg="gold" pl={"20px"}>
        Harum, impedit?
      </Box>
      <Box bg="tomato" p={1}>
        Eius, nulla.
      </Box>
      <Box bg="red.600" p={2}>
        Fuga, officia!
      </Box>
      <Box bg="blue.600" p={3}>
        Dolorum, odio.
      </Box>
      <Box bg="black" pb={"50px"}>
        Cumque, vitae?
      </Box>
      <Box bg="gray.300" pr={"100px"}>
        Eos, magnam.
      </Box>
      <Box bg="skyblue">Corporis, sapiente?</Box>
      <div
        style={{
          margin: "10px",
          backgroundColor: "gold",
          color: "gray",
          paddingLeft: "20px",
          boxShadow: "10px 5px 5px red",
        }}
      >
        Lorem ipsum.
      </div>
    </>
  );
}

export default App;

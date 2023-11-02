import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Numquam!</Button>
      <Button colorScheme="orange">Eligendi.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Dolorum.
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Nesciunt.
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Impedit?
      </Button>
      <Button colorScheme="orange" variant="ghost">
        Magni.
      </Button>
      <Button variant="link">Quos.</Button>
      <Button leftIcon={<EmailIcon />}>Quos!</Button>
      <Button rightIcon={<ArrowRightIcon />}>Optio.</Button>
      <Button isLoading>Temporibus!</Button>
      <Button isLoading loadingText="전송중">
        Quae.
      </Button>
      <Button>Dolor.</Button>
      <Button>Debitis.</Button>
      <Button>Pariatur!</Button>
      <Button>Explicabo!</Button>
      <Button>Unde.</Button>
      <Button>Possimus!</Button>
      <Button>Delectus?</Button>
      <Button>Neque?</Button>
      <Button>Facilis.</Button>
      <Button>Quaerat.</Button>
      <Button>Architecto?</Button>
      <Button>Ab?</Button>
      <Button>Autem?</Button>
      <Button>Amet?</Button>
      <Button>Id.</Button>
      <Button>Corporis.</Button>
      <Button>Omnis.</Button>
      <Button>Eveniet?</Button>
    </>
  );
}

export default App;

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          {/*Table>Thead>Tr>Th*4>lorem1^^^Tbody>Tr*5>Td*4>lorem1*/}
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Soluta.</Th>
                <Th>At.</Th>
                <Th>Facilis.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Laborum.</Td>
                <Td>Atque!</Td>
                <Td>Esse.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Excepturi!</Td>
                <Td>Labore.</Td>
                <Td>Et.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Repellendus?</Td>
                <Td>Eos.</Td>
                <Td>Dolor?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nobis.</Td>
                <Td>Repudiandae.</Td>
                <Td>Dolorum!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Sequi.</Td>
                <Td>Odio?</Td>
                <Td>Maxime?</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;

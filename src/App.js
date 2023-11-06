import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";

function App() {
  // 필요한 코드들 작성
  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleButtonClick} colorScheme="blue">
          추가
        </Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;

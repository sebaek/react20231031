import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }
  return (
    <>
      <Center bg={"blue"} onClick={handleOuterBoxClick} h={"200px"}>
        <Center
          bg={"green"}
          w={"200px"}
          h={"100px"}
          onClick={handleInnerBoxClick}
        >
          <Button colorScheme={"purple"} onClick={handleButtonClick}>
            button
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;

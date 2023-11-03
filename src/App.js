import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick() {
    console.log("바깥 상자 클릭됨");
  }
  function handleInnerBoxClick() {
    console.log("안쪽 상자 클릭됨");
  }
  function handleButtonClick() {
    console.log("버튼 클릭됨");
  }
  return (
    <>
      <Center onClick={handleOuterBoxClick}>
        <Center onClick={handleInnerBoxClick}>
          <Button onClick={handleButtonClick}>button</Button>
        </Center>
      </Center>
    </>
  );
}

export default App;

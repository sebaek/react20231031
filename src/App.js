import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/*첫번째 버튼 클릭시 "first" 콘솔에 출력*/}
      <Button onClick={() => console.log("first")}>Lorem.</Button>

      {/*두번째 버튼 클릭시 "second" 콘솔에 출력*/}
      <Button
        onClick={() => {
          console.log("second");
        }}
      >
        Sunt?
      </Button>
    </>
  );
}

export default App;

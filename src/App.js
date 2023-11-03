import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

// 두개의 버튼 만들기
// 첫번째 버튼은 클릭하면 콘솔에 "hello"
// 두번째 버튼은 클릭하면 콘솔에 "greeting"

function App() {
  function sayHello() {
    console.log("hello");
  }

  function sayGreeting() {
    console.log("greeting");
  }

  return (
    <>
      <MyButton executeClick={sayHello}>헬로</MyButton>
      <MyButton executeClick={sayGreeting}>그리팅</MyButton>
    </>
  );
}

export default App;

import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ to, someProp }) {
  someProp();

  return (
    <>
      <div>
        <a href={to[0]}>link!!!</a>
      </div>
      <div>
        <Button onClick={someProp}>버튼</Button>
      </div>
    </>
  );
}

function App(props) {
  function func1() {
    console.log("func1 실행됨");
  }

  return (
    <div>
      <MyComp to={["https://www.naver.com"]} someProp={func1}></MyComp>
    </div>
  );
}

export default App;

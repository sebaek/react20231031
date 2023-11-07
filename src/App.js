import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  // 3. context 사용하기 : useContext(Context);
  const message = useContext(MessageContext);

  return <Text>받은 메시지 : {message}</Text>;
}

function Bcomp() {
  return <CComp />;
}

function Acomp() {
  return <Bcomp />;
}

function App(props) {
  const [message, setMessage] = useState("");

  // message state를 Ccomp에 전달 하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기
  //    : <Context.Provider value={state}></Context.Provider>
  // 3. tree안에 context사용하기

  return (
    <div>
      <Button onClick={() => setMessage("바꾼 메시지!!!")}>
        메시지 바꾸기
      </Button>
      <MessageContext.Provider value={message}>
        <Acomp />
      </MessageContext.Provider>
    </div>
  );
}

// 1. context 만들기
// context 이름은 대문자로 시작하고 Context로 끝남
const MessageContext = createContext(null);

export default App;

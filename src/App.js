import React, { useEffect, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  console.log("useEffect 밖의 로그", number);

  // useEffect
  // 컴포넌트 외부시스템과 작업할 때
  // 주로 ajax로 데이터 가져올 때

  // 첫번째 파라미터 : 실행할 함수
  // 두번째 파라미터 : 첫번째파라미터를 실행 시키는 값 , 빈 배열이면 초기 렌더링 때만 실행됨
  useEffect(() => {
    console.log("이펙트의 첫번째 파라미터 함수 실행됨", number);
  }, []);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </div>
  );
}

export default App;

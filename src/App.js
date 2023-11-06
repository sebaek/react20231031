import React from "react";

function App(props) {
  // HOOK : use 로 시작하는 함수
  // hook은 컴포넌트 상단에 작성해야함
  // 조건문이나, 반복문, 중첩된 함수안에 작성하면 안됨

  if (true) {
    // hook 호출 코드 작성 불가
  }

  for (let i = 0; i < 3; i++) {
    // hook 호출 코드 작성 불가
  }

  function handle() {
    // hook 호출 코드 작성 불가
  }

  return <div></div>;
}

export default App;

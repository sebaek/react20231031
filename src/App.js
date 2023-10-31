function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  let message;

  if (num1 === num2) {
    message = <h1>당첨</h1>;
  } else {
    message = <h1>다시 던져 보세요.</h1>;
  }

  return (
    <div>
      <h1>1번 주사위 : {num1}</h1>
      <h1>2번 주사위 : {num2}</h1>
      <h1>{num1 === num2 ? "당첨" : "다시 던져 보세요."}</h1>

      <hr />

      {message}
    </div>
  );

  // 두 수를 출력하고
  // 두 수가 같으면
  // "당첨!!"
  // 두 수가 다르면
  // "다시 던져 보세요"
}

export default App;

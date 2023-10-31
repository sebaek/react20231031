function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "01099999999";
  const age = 44;

  return <></>;
}

function App() {
  return (
    <div>
      <MyComp />
      {/*
       <h1>age는 44</h1>
       <h1>address는 seoul</h1>
       <h1>country는 korea</h1>
       <h1>전화번호는 01099999999</h1>
     */}
    </div>
  );
}

export default App;

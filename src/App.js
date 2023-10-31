function MyComp() {
  const address = "seoul";
  const country = "korea";
  const phone = "01099999999";
  const age = 44;
  const randomNumber = Math.random();

  return (
    <>
      <h1>age는 {age}</h1>
      <h1>address는 {address}</h1>
      <h1>country는 {country}</h1>
      <h1>전화번호는 {phone}</h1>
      <h1>난수 : {randomNumber}</h1>
      <h1>1~10 : {Math.ceil(randomNumber * 10)}</h1>
    </>
  );
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

function App() {
  return (
    <div>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return <div>{name}</div>;
}

export default App;

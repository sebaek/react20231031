function MyComp({
  m = "5px",
  p = "7px",
  color = "blue",
  bg = "white",
  text = "no content",
}) {
  return (
    <div style={{ margin: m, padding: p, backgroundColor: bg, color: color }}>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" p="10px" color="gold" bg="black" />
      <MyComp m="30px" bg="black" text="hello react" />
      <MyComp p="10px" color="gold" text="hello react" />
    </div>
  );
}

export default App;

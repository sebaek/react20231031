function App() {
  return (
    <div>
      <MyText
        style={{ color: "blue", border: "5px solid gold" }}
        value="hello"
      />
      <MyText
        style={{ color: "red", border: "5px dotted yellow" }}
        value="안녕하세요."
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;

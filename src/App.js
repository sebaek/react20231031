function MyComponent1() {
  return (
    <div style={{ width: "100%" }}>
      <img
        style={{ width: "100%" }}
        src="https://i.imgur.com/SuL4x4v.jpeg"
        alt="경복궁"
      />
      ;
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent1></MyComponent1>
      <MyComponent1 />
      <MyComponent1 />
      {/*
      <img src="https://i.imgur.com/SuL4x4v.jpeg" />
      <img src="https://i.imgur.com/SuL4x4v.jpeg" />
      <img src="https://i.imgur.com/SuL4x4v.jpeg" />
      */}
    </div>
  );
}

export default App;

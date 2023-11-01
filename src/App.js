function App() {
  return (
    <div>
      <MyBox
        p="10px"
        m="20px"
        bg="gold"
        color="grey"
        text="my name is component"
      />
      <MyBox
        p="7px"
        m="15px"
        bg="skyblue"
        color="red"
        text="오늘 점심 머먹지?"
      />
    </div>
  );
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;

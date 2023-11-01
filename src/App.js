function App() {
  return <div>{/*  MyBox 컴포넌트 2번 사용해 보기 */}</div>;
}

function MyBox({ p, m, bg, color, text }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <p>{text}</p>
    </div>
  );
}

export default App;

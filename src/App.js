function MyElem({ name, age, team }) {
  return (
    <div>
      <p>
        {name}선수는 {age}살이고 {team}에서 뜁니다.
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={33} team="파리" />
    </div>
  );
}

export default App;

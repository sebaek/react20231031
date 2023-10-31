function App() {
  // jsx가 js 코드로 변환됨
  // 따라서 js 키워드를 사용할 수 없음
  return (
    <>
      {/* class 속성은 className으로 작성 */}
      <div className="header">Lorem ipsum dolor.</div>
      <div className="error">Lorem ipsum dolor.</div>
      {/* for 속성은 htmlFor로 작성 */}
      <div>
        <label htmlFor="nameInput">이름</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="ageInput"></label>
        <input type="text" id="ageInput" />
      </div>
    </>
  );
}

export default App;

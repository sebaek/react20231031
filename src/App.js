import {
  country,
  text,
  value,
  MyElem,
  MyNavBar,
  MyContent,
} from "./component/MyElem";

function App() {
  // country, text, value, MyElem, MyNavBar, MyContent
  // 를 하나의 파일(component/MyElem.js)에 작성하고 export 하기
  return (
    <div>
      <p>{country}</p>
      <p>{text}</p>
      <p>{value}</p>
      <MyElem />
      <MyNavBar />
      <MyContent />
    </div>
  );
}

export default App;

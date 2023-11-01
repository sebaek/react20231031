import { MyText } from "./component/MyText";
import { MyBox } from "./component/MyBox";
import { MyContainer } from "./component/MyContainer";
import { MyNavbar } from "./component/MyNavbar";

function App() {
  return (
    <div>
      {/* 아래 네개의 컴포넌트를 src/component 폴더에 만들기 */}
      <MyText />
      <MyBox />
      <MyContainer />
      <MyNavbar />
    </div>
  );
}

export default App;

import aaggee, { city } from "./component/MyElem";
import MyContainer, { person, country } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{aaggee}</h1>
      <MyContainer />
      <h1>
        {person.age}, {person.name}
      </h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;

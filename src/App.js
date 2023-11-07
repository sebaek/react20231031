import React, { createContext, useState } from "react";
import { MyInput } from "./component/MyInput";
import { MyText } from "./component/MyText";

function App(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <TextContext.Provider value={{ text, setText }}>
        <MyInput></MyInput>
        <MyText></MyText>
      </TextContext.Provider>
    </div>
  );
}

export const TextContext = createContext(null);

export default App;

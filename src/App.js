import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [myState, setMyState] = useState("");

  useEffect(() => {
    axios
      .get("/api/main1/sub1")
      .then((response) => response.data)
      .then((data) => setMyState(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>{myState}</div>;
}

export default App;

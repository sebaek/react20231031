import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <div>
      <Box mb={3}>
        <List>{listItems}</List>
      </Box>

      <Box mb={3}>
        <List>
          {/*  손흥민, 이강인, 김민재
           */}
          {arr2.map((e, index) => (
            <ListItem key={index}>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {/*  세번째 배열들이 ListItem으로 출력되도록 */}
          {arr3.map((e, i) => (
            <ListItem key={i}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;

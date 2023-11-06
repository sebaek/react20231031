import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];

  const listItems = arr.map((item) => <ListItem>{item}</ListItem>);

  return (
    <div>
      <Box mb={3}>
        <List>{listItems}</List>
      </Box>

      <Box mb={3}>
        <List>
          {/*  손흥민, 이강인, 김민재
           */}
          {arr2.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb={3}>
        <List>
          {/*  세번째 배열들이 ListItem으로 출력되도록 */}
          {arr3.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;

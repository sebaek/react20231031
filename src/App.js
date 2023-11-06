import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtonClick(index) {
    // console.log(index + "번 째 아이템 지우기");
    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1);

    // const nextFoods = foods.filter((item, i) => i != index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스")}>아이스</Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}{" "}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;

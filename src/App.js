import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요." multiple h={"120px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Voluptates?</option>
            <option value="value3">Sapiente.</option>
            <option value="value4">Ex?</option>
            <option value="value5">Recusandae!</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;

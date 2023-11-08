import React, { useEffect, useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("끝!!"));
  }, [customerId]);

  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {/*option[value=$]{$}*10*/}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        <Text>고객 이름 : {customer.name}</Text>
      </Box>
    </div>
  );
}

export default App;

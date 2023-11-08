import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then((response) => response.data)
      .then((data) => setEmployee(data))
      .finally(() => setIsLoading(false));
  }, [employeeId]);

  let textContent = null;

  if (isLoading) {
    textContent = <Spinner />;
  } else {
    if (employee === null) {
      textContent = <Text>다른 직원 번호를 선택해주세요.</Text>;
    } else {
      textContent = (
        <Text>
          {employee.lastName}, {employee.firstName}
        </Text>
      );
    }
  }

  return (
    // 직원 번호를 선택하면 직원의 이름이 출력
    // /api/main1/sub5?id=5
    // spring boot의 메소드도 작성하기
    <div>
      <Select
        placeholder="직원 번호"
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>

      <Box>{textContent}</Box>
    </div>
  );
}

export default App;

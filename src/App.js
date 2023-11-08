import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Button onClick={() => navigate("/path1?id=1")}>1번 고객 보기</Button>
        <Button onClick={() => navigate("/path1?id=2")}>2번 고객 보기</Button>
        <Button onClick={() => navigate("/path1?id=3")}>3번 고객 보기</Button>

        <Button onClick={() => navigate("/path2/seoul")}>seoul 보기</Button>
        <Button onClick={() => navigate("/path2/busan")}>busan 보기</Button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function AComp() {
  const [customer, setCustomer] = useState(null);
  // query string 을 얻기
  const [searchParams] = useSearchParams();

  // console.log(searchParams);
  // console.log(searchParams.get("id"));
  // console.log(searchParams.toString());

  useEffect(() => {
    axios
      .get("/api/main1/sub4?" + searchParams.toString())
      .then((response) => setCustomer(response.data));
  }, [searchParams]);

  return (
    <Box>
      {customer && (
        <Text>
          {searchParams.get("id")} 번 고객명 {customer.name}
        </Text>
      )}
    </Box>
  );
}

function BComp() {
  // dynamic param을 얻는 hook
  const params = useParams();

  console.log(params);

  console.log(params.address);

  return <Box>비 컴포넌트 {params.address}</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="path1" element={<AComp />} />

      {/* dynamic param : spring web mvc 의 path variable 과 유사 */}
      <Route path="path2/:address" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;

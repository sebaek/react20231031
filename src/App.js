import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        {/* react-router 사용시 a 태그를 사용하지 않을 것 */}
        <Box>
          <a href="/apath">에이로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">비로 가기</a>
        </Box>

        {/* 대신 Link Component 사용 */}
        <Box>
          <Link to={"/apath"}>에이로 가기</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>비로 가기</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>에이 컴포넌트</Box>;
}

function BComp() {
  return <Box>비 컴포넌트</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;

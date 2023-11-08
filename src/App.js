import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Box>home page</Box>} />
      <Route path="/path1" element={<Box>경로1</Box>} />
      <Route path="/path2" element={<Box>경로2</Box>} />
      <Route path="/path3" element={<Box>경로3</Box>} />
      <Route path="/main1/path1" element={<Box>경로4</Box>} />
      <Route path="/main1/path2" element={<Box>경로5</Box>} />
      <Route path="/main2">
        <Route path="path1" element={<Box>경로6</Box>} />
        <Route path="path2" element={<Box>경로7</Box>} />
        <Route path="path3">
          <Route path="sub1" element={<Box>경로8</Box>} />
          <Route path="sub2" element={<Box>경로9</Box>} />
        </Route>
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;

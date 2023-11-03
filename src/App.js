import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <>
      <Button as="a" href={to} colorScheme="orange">
        {children}
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <MyLink to="https://www.naver.com">naver 로</MyLink>
      <MyLink to="https://www.daum.net">daum 으로</MyLink>
      {/*
    <a href="https://www.naver.com">naver 로</a>
    <a href="https://www.daum.net">daum 으로</a>

    */}
    </>
  );
}

export default App;

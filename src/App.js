import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "저장 완료",
            description: "게시물이 저장되었습니다.",
            duration: 2000,
            position: "top",
            isClosable: true,
          })
        }
      >
        토스트 띄우기
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "저장 실패",
            description: "게시물이 저장되지 않았습니다.",
            duration: 2000,
            position: "top",
            isClosable: true,
            status: "error",
          })
        }
      >
        토스트 띄우기
      </Button>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function AComp() {
  // 3. context 사용하기 : useContext(Context)
  const { setMessage } = useContext(MessageContext);

  return (
    <Button onClick={() => setMessage("변경된 메세지")}>
      메시지 변경하기!!!
    </Button>
  );
}

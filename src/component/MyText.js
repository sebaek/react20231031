import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { TextContext } from "../App";

export function MyText() {
  const { text } = useContext(TextContext);

  return <Text>{text}</Text>;
}

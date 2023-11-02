import { useEffect, useState } from "react";
import { Text } from "./styles";
import { SearchBar } from "../SearchBar";

export function TextModal({ text, href }) {
  return (
    <Text href={href}>
      <p>{text}</p>
    </Text>
  );
}

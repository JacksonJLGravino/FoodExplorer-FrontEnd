import { useEffect, useState } from "react";
import { Container, ModalMenu } from "./styles";
import { SearchBar } from "../SearchBar";

export function Modal({ IsOpen, children }) {
  return (
    <Container>
      {IsOpen ? (
        <ModalMenu>
          <SearchBar />
          <div>{children}</div>
        </ModalMenu>
      ) : (
        <div />
      )}
    </Container>
  );
}

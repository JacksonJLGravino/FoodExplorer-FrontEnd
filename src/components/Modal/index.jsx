import { Container, ModalMenu } from "./styles";
import { SearchBar } from "../SearchBar";

export function Modal({ IsOpen, children, onChange, value }) {
  return (
    <Container>
      {IsOpen ? (
        <ModalMenu>
          <SearchBar
            onChange={onChange}
            placeholder="Busque por pratos"
            value={value}
          />
          <div>{children}</div>
        </ModalMenu>
      ) : (
        <div />
      )}
    </Container>
  );
}

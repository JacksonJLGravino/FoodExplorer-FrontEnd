import { Button, Container } from "./styles";

export function BordelessButton({ btnText }) {
  return (
    <Container>
      <Button>{btnText}</Button>
    </Container>
  );
}

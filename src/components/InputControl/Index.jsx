import { Container, Input, Label } from "./styles";

export function InputControler({ label, placeholder, htmlFor, type }) {
  return (
    <Container>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={htmlFor} />
    </Container>
  );
}

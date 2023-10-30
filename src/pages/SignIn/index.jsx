import { BordelessButton } from "../../components/BordelessButton/Index";
import { FormButton } from "../../components/FormButton/Index";
import { InputControler } from "../../components/InputControl/Index";
import { Container, Form, FormHeaderText, Logo } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { Tag } from "../../components/Tag/Index";

export function SignIn() {
  return (
    <Container>
      <a href="">
        <Logo src={LogoSvg} alt="logo" />
      </a>

      <Form>
        <FormHeaderText>Faça login</FormHeaderText>
        <InputControler
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          htmlFor="emailIn"
          type="email"
        />
        <InputControler
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          htmlFor="senha"
          type="passwordIn"
        />
        <FormButton btnText="Entrar" />
        <BordelessButton btnText="ja tenho conta" />
      </Form>
    </Container>
  );
}

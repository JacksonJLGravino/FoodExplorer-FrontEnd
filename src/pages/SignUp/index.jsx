import { BordelessButton } from "../../components/BordelessButton/Index";
import { FormButton } from "../../components/FormButton/Index";
import { InputControler } from "../../components/InputControl/Index";
import { Container, Form, FormHeaderText, Logo } from "./styles";
import LogoSvg from "../../assets/logo.svg";

export function SignUp() {
  return (
    <Container>
      <a href="">
        <Logo src={LogoSvg} alt="logo" />
      </a>

      <Form>
        <FormHeaderText>Criar sua conta</FormHeaderText>
        <InputControler
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          htmlFor="nomeUp"
          type="text"
        />
        <InputControler
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          htmlFor="emailUp"
          type="email"
        />
        <InputControler
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          htmlFor="senhaUp"
          type="password"
        />
        <FormButton btnText="Entrar" />
        <BordelessButton btnText="ja tenho conta" />
      </Form>
    </Container>
  );
}

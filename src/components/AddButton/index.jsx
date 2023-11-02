import { AddBtn, Container, InfoSun, Text, BtnInclude } from "./styles";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";

export function AddButton({ href }) {
  return (
    <Container>
      <InfoSun>
        <AddBtn>
          <img src={Minus} alt="" />
        </AddBtn>
        <Text>01</Text>
        <AddBtn>
          <img src={Plus} alt="" />
        </AddBtn>
      </InfoSun>

      <BtnInclude href={href}>incluir</BtnInclude>
    </Container>
  );
}

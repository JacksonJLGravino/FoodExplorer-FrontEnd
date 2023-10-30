import {
  BgHeaderFooter,
  Container,
  GoBack,
  Food,
  FoodImg,
  TagContainer,
  Main,
  AddBtn,
  AddRemoveBtns,
  FooterBtnsControler,
  ConfirmBtn,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import Dish from "../../assets/Dish.png";
import { Tag } from "../../components/Tag/Index";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";

export function UserFood() {
  return (
    <Container>
      <BgHeaderFooter>
        <HeaderUser />
      </BgHeaderFooter>

      <Main>
        <GoBack>
          <div></div>
          <p>Voltar</p>
        </GoBack>

        <FoodImg src={Dish} alt="" />
        <Food>
          <h4>Salada Ravanello</h4>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <TagContainer>
            <Tag text="comida" />
            <Tag text="coutra coisa" />
          </TagContainer>

          <FooterBtnsControler>
            <AddRemoveBtns>
              <AddBtn>
                <img src={Minus} alt="" />
              </AddBtn>
              <p>01</p>
              <AddBtn>
                <img src={Plus} alt="" />
              </AddBtn>
            </AddRemoveBtns>

            <ConfirmBtn>
              <div></div>
              <p>pedir - R$ 25,00</p>
            </ConfirmBtn>
          </FooterBtnsControler>
        </Food>
      </Main>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}

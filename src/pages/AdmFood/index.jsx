import {
  BgHeaderFooter,
  Container,
  GoBack,
  Food,
  FoodImg,
  TagContainer,
  Main,
  FooterBtnControler,
  ConfirmBtn,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import Dish from "../../assets/Dish.png";
import { Tag } from "../../components/Tag/Index";
import { HeaderAdm } from "../../components/HeaderAdm";

export function AdmFood() {
  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm />
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

          <FooterBtnControler>
            <ConfirmBtn href="/edit">
              <p>Editar prato</p>
            </ConfirmBtn>
          </FooterBtnControler>
        </Food>
      </Main>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}

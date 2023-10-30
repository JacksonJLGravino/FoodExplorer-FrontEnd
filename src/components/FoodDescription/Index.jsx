import { Container, GoBack, Food, FoodImg } from "./styles";
import Dish from "../../assets/Dish.png";

export function FoodDescription() {
  return (
    <Container>
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
      </Food>
    </Container>
  );
}

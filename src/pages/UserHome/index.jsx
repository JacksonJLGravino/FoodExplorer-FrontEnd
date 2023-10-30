import {
  BgHeaderFooter,
  Container,
  BannerContainer,
  FoodsContainer,
} from "./styles";
import { Footer } from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Banner } from "../../components/Banner";
import { FoodCard } from "../../components/FoodCard/Index";
import Dish from "../../assets/Dish.png";

export function UserHome() {
  return (
    <Container>
      <BgHeaderFooter>
        <HeaderUser />
      </BgHeaderFooter>

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Sucos</h3>
        <div>
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
          <FoodCard image={Dish} title="comida" price="R$ 5,25" />
        </div>
      </FoodsContainer>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}

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
import { HeaderAdm } from "../../components/HeaderAdm";

export function AdmHome() {
  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm />
      </BgHeaderFooter>

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Sucos</h3>
        <div>
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
          <FoodCard
            image={Dish}
            title="comida"
            price="R$ 5,25"
            isAdmin={true}
          />
        </div>
      </FoodsContainer>

      <BgHeaderFooter>
        <Footer />
      </BgHeaderFooter>
    </Container>
  );
}

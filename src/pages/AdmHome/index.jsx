import { useState } from "react";
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
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";

import { Slider } from "../../components/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function AdmHome() {
  const [isOpen, setIsOpen] = useState();

  function openCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <Container>
      <BgHeaderFooter>
        <HeaderAdm onClick={openCloseMenu} IsOpen={isOpen} />
      </BgHeaderFooter>

      <Modal IsOpen={isOpen}>
        <TextModal text="Novo Prato" href="/new" />
        <TextModal text="Sair" />
      </Modal>

      <BannerContainer>
        <Banner />
      </BannerContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <Slider>
            <SwiperSlide>
              <FoodCard
                image={Dish}
                title="comida"
                price="R$ 5,25"
                isAdmin={true}
                hrefIcon="/food"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={Dish}
                title="comida"
                price="R$ 5,25"
                isAdmin={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={Dish}
                title="comida"
                price="R$ 5,25"
                isAdmin={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={Dish}
                title="comida"
                price="R$ 5,25"
                isAdmin={true}
              />
            </SwiperSlide>
          </Slider>
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

import React, { useRef, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation } from "swiper/modules";
import { Slider } from "../../components/Slider";
import { Modal } from "../../components/Modal";
import { TextModal } from "../../components/TextModal/input";

export function UserHome() {
  const [isOpen, setIsOpen] = useState(false);

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
        <HeaderUser onClick={openCloseMenu} IsOpen={isOpen} />
      </BgHeaderFooter>

      <Modal IsOpen={isOpen}>
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
                href="/food"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard image={Dish} title="comida" price="R$ 5,25" />
            </SwiperSlide>

            <SwiperSlide>
              <FoodCard image={Dish} title="comida" price="R$ 5,25" />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard image={Dish} title="comida" price="R$ 5,25" />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard image={Dish} title="comida" price="R$ 5,25" />
            </SwiperSlide>
          </Slider>
        </div>
      </FoodsContainer>

      <FoodsContainer>
        <h3>Refeições</h3>
        <div>
          <FoodCard image={Dish} title="comida" price="R$ 5,25" href="/food" />
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

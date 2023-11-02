import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation } from "swiper/modules";
import { FoodCard } from "../FoodCard/Index";
import Dish from "../../assets/Dish.png";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export function Slider({ children }) {
  window.addEventListener("resize", ResizeSlide);
  const [size, setSize] = useState(3);

  function ResizeSlide() {
    let r = window.innerWidth < 714;
    if (r) {
      setSize(2);
    } else {
      setSize(3);
    }
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={size}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Navigation]}
      className="mySwiper">
      {children}
    </Swiper>
  );
}

/*

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
      <SwiperSlide>
        <FoodCard image={Dish} title="comida" price="R$ 5,25" />
      </SwiperSlide>*/

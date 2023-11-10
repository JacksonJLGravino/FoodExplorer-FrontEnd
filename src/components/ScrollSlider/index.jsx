import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Slider } from "../Slider";
import { SwiperSlide } from "swiper/react";
import { FoodCard } from "../../components/FoodCard/Index";
import Dish from "../../assets/Dish.png";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ScrollSlider({ search, type, isAdmin, onClick }) {
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate();

  function handleFoodDetails(id) {
    navigate(`/foods/${id}`);
  }

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/foods?type=${type}&title=${search}`);

      setFoods(...Object.values(response.data));
    }
    fetchFoods();
  }, [search]);

  return (
    <Slider>
      {foods.map((food) => (
        <SwiperSlide key={String(food.id)}>
          <FoodCard
            image={Dish}
            title={food.title}
            description={food.description}
            price={food.price}
            href="/food"
            isAdmin={isAdmin}
            onClick={() => handleFoodDetails(food.id)}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
}

import { ButtonIcon, Container, Image, Price, Title } from "./styles";
import Heart from "../../assets/heart.svg";
import Pencil from "../../assets/pencil.svg";
import { AddButton } from "../AddButton";

export function FoodCard({ image, title, price, isAdmin = false }) {
  return (
    <Container>
      <Image src={image} />
      <ButtonIcon>
        {isAdmin ? <img src={Pencil} alt="" /> : <img src={Heart} alt="" />}
      </ButtonIcon>
      <Title>{title}</Title>
      <Price>{price}</Price>
      {isAdmin ? <div></div> : <AddButton />}
    </Container>
  );
}

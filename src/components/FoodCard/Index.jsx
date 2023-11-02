import { ButtonIcon, Container, Image, Price, Title } from "./styles";
import Heart from "../../assets/heart.svg";
import Pencil from "../../assets/pencil.svg";
import { AddButton } from "../AddButton";

export function FoodCard({
  image,
  title,
  price,
  isAdmin = false,
  href,
  hrefIcon,
}) {
  return (
    <Container>
      <Image src={image} />
      <ButtonIcon href={hrefIcon}>
        {isAdmin ? <img src={Pencil} alt="" /> : <img src={Heart} alt="" />}
      </ButtonIcon>
      <Title>{title}</Title>
      <p className="text">
        Presunto de parma e rúcula em um pão com fermentação natural.
      </p>
      <Price>{price}</Price>
      {isAdmin ? <div></div> : <AddButton href={href} />}
    </Container>
  );
}

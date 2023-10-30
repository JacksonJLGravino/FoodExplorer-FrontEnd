import { BtnMenu, Container, Logo, Out, Receipt } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ReceiptSvg from "../../assets/receipt.svg";
import Menu from "../../assets/menu.svg";
import SignOut from "../../assets/signOut.svg";
import { SearchBar } from "../SearchBar";

export function HeaderUser({ btnMenuClick, QuantityReceipt = 0 }) {
  return (
    <Container>
      <BtnMenu>
        <img src={Menu} alt="icone de menu" onClick={btnMenuClick} />
      </BtnMenu>

      <a href="#">
        <Logo src={LogoSvg} alt="logo" />
      </a>

      <form action="">
        <SearchBar placeholder="Busque por pratos ou ingredientes" />
      </form>

      <Receipt>
        <img src={ReceiptSvg} alt="icone de recibo" />
        <p>Pedidos ({QuantityReceipt}) </p>
        <span>{QuantityReceipt}</span>
      </Receipt>

      <Out href="">
        <img src={SignOut} alt="" />
      </Out>
    </Container>
  );
}

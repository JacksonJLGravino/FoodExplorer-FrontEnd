import { BtnMenu, Container, Logo, Out, Receipt } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ReceiptSvg from "../../assets/receipt.svg";
import Menu from "../../assets/menu.svg";
import SignOut from "../../assets/signOut.svg";
import { SearchBar } from "../SearchBar";

export function HeaderAdm({ btnMenuClick, QuantityReceipt = 0 }) {
  return (
    <Container>
      <BtnMenu>
        <img src={Menu} alt="icone de menu" onClick={btnMenuClick} />
      </BtnMenu>

      <Logo href="#">
        <img src={LogoSvg} alt="logo" />
        <span>admin</span>
      </Logo>

      <form action="">
        <SearchBar placeholder="Busque por pratos ou ingredientes" />
      </form>

      <Receipt>
        <p>Novo prato</p>
      </Receipt>

      <Out href="">
        <img src={SignOut} alt="" />
      </Out>
    </Container>
  );
}

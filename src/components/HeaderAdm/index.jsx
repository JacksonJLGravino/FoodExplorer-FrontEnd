import { BtnMenu, Close, Container, Logo, Open, Out, Receipt } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ReceiptSvg from "../../assets/receipt.svg";
import Menu from "../../assets/menu.svg";
import SignOut from "../../assets/signOut.svg";
import { SearchBar } from "../SearchBar";
import CloseSvg from "../../assets/close.svg";

export function HeaderAdm({ onClick, IsOpen }) {
  return (
    <Container>
      {IsOpen ? (
        <Open>
          <button onClick={onClick}>
            <img src={CloseSvg} alt="icone de menu" />
          </button>
          <p>Menu</p>
        </Open>
      ) : (
        <Close>
          <BtnMenu onClick={onClick}>
            <img src={Menu} alt="icone de menu" />
          </BtnMenu>

          <Logo href="/">
            <img src={LogoSvg} alt="logo" />
            <span>admin</span>
          </Logo>

          <form action="">
            <SearchBar placeholder="Busque por pratos ou ingredientes" />
          </form>

          <Receipt href="/new">
            <p>Novo prato</p>
          </Receipt>

          <Out href="">
            <img src={SignOut} alt="" />
          </Out>
        </Close>
      )}
    </Container>
  );
}

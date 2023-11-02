import { BtnMenu, Close, Container, Logo, Open, Out, Receipt } from "./styles";
import LogoSvg from "../../assets/logo.svg";
import ReceiptSvg from "../../assets/receipt.svg";
import Menu from "../../assets/menu.svg";
import CloseSvg from "../../assets/close.svg";
import SignOut from "../../assets/signOut.svg";
import { SearchBar } from "../SearchBar";
import { useState } from "react";

export function HeaderUser({ onClick, QuantityReceipt = 0, IsOpen }) {
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
        <Close id="close">
          <BtnMenu onClick={onClick}>
            <img src={Menu} alt="icone de menu" />
          </BtnMenu>

          <a href="/">
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
        </Close>
      )}
    </Container>
  );
}

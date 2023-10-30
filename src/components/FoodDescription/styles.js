import styled from "styled-components";
import CaretLeft from "../../assets/caretLeft.svg";

export const Container = styled.div``;

export const GoBack = styled.a`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  align-items: center;

  > div {
    background-image: url(${CaretLeft});
    background-repeat: no-repeat;
    background-size: cover;
    width: 32px;
    height: 32px;
  }

  > p {
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const FoodImg = styled.img`
  display: flex;
  width: 264px;
  height: 264px;
  margin-top: 16px;
  margin-inline: auto;
`;

export const Food = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
  font-family: Poppins;

  > h4 {
    margin-top: 16px;
    font-size: 27px;
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-top: 24px;
  }
`;

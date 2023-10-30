import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 56px 28px 24px;
  max-width: 1178px;
  margin-inline: auto;

  @media (min-width: 767px) {
    padding-block: 24px;
    gap: 32px;
  }

  form {
    display: none;
    @media (min-width: 767px) {
      display: block;
      width: 100%;
    }
  }
`;

export const BtnMenu = styled.button`
  background: none;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: end;
    gap: 0;
  }

  img {
    height: 26px;

    @media (min-width: 768px) {
      height: 30px;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Receipt = styled.a`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: 768px) {
    width: 100%;
    text-align: center;
    max-width: 226px;
    gap: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    padding: 12px 46px;

    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }

  > p {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Out = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

import styled from "styled-components";
import logo from "../Utils/logo.jpg";

const LogoComponentStyled = styled.div`
  height: fit-content;
  text-align: center;

  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  & p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
`;

export default function Logo() {
  return (
    <LogoComponentStyled>
      <img src={logo} alt="Logo" />
      <p>The Wild Oasis</p>
    </LogoComponentStyled>
  );
}

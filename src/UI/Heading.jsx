import styled, { css } from "styled-components";
import Row from "./Row";

// if you want to create a different heading level, get the prop from component and styled according to that and below is how we get prop and styled component

// const Heading = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: yellowgreen;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Heading;

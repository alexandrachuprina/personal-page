import styled from "styled-components";
import { sizes } from "../abstracts/breakpoints";

export const BasicButton = styled.button`
  border: 1px solid black;
  background-color: transparent;
  border-radius: 30px;
  color: black;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  height: 3vw;
  padding: 1vw 1.5vw 1vw 1.5vw;
  margin: 0 1vw 1vw 0;

  :hover {
    background-color: black;
    h2 {
      color: white;
    }
    p {
      color: white;
    }
  }

  @media (min-width: ${sizes.smallest}) and (max-width: ${sizes.xxs}) {
    height: 4vw;
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: ${sizes.xxs}) and (max-width: ${sizes.xs}) {
    height: 3vw;
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: ${sizes.xs}) and (max-width: ${sizes.s}) {
    height: 3vw;
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: ${sizes.s}) and (max-width: ${sizes.m}) {
    height: 3vw;
    h2 {
      font-size: 1rem;
    }
  }
  @media (min-width: ${sizes.m}) and (max-width: ${sizes.l}) {
    height: 3vw;
    h2 {
      font-size: 1rem;
    }
  }
`
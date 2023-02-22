import styled from "styled-components";

export const BasicButton = styled.button`
  margin: 0;
  border: 2px solid black;
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
  /* width: 15vw; */
  padding: 1vw 1.5vw 1vw 1.5vw;
  margin: 0 1vw 1vw 0;

  /* transition-property: transform;
  transition-duration: 300ms;

  :hover {
    font-style: italic;
    transform: translate(4px);
  } */
  :hover {
    background-color: black;
    h2 {
      color: white;
    }
  }
`
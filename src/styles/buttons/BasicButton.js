import styled from "styled-components";

export const BasicButton = styled.button`
  margin: 0;
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

  height: 2vw;
  /* width: 15vw; */
  padding: 1vw 1.5vw 1vw 1.5vw;
  margin: 0 1vw 1vw 0;

  :hover {
    color: white;
    background-color: black;
  }
`
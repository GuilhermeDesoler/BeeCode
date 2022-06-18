import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  border: none;
  color: black;
  background: yellow;
  padding: 0.5em 1em;
  font-size: 22px;
  cursor: pointer;
  box-shadow: -7px 7px 0 0 rgba(0, 0, 0, 1);
  transform: translate(7px, -7px);
  transition: transform linear 100ms, box-shadow linear 100ms;
  &:hover {
    transform: translate(0px, 0px);
    box-shadow: 0 0 0 0;
  }
  &:active {
    background: orange;
  }
`;

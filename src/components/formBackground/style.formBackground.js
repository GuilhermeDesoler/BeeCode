import styled from "styled-components";

export const FormBackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, yellow, orange);
`;

export const FormBackgroundCard = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  border-radius: 0.8rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

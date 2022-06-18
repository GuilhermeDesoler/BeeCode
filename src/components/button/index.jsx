import { ButtonContainer, ButtonStyled } from "./style.button";

export const Button = ({ children, onClick: func, ...rest }) => {
  return (
    <ButtonContainer>
      <ButtonStyled onClick={func} {...rest}>
        {children}
      </ButtonStyled>
    </ButtonContainer>
  );
};

export default Button;

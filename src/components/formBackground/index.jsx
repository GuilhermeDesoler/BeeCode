import {
  FormBackgroundContainer,
  FormBackgroundCard,
} from "./style.formBackground";

const FormBackground = ({ children }) => {
  return (
    <FormBackgroundContainer>
      <FormBackgroundCard>{children}</FormBackgroundCard>
    </FormBackgroundContainer>
  );
};

export default FormBackground;

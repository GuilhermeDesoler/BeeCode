import { InputContainer } from "./style.input";

const TextInput = ({ label, error, ...rest }) => {
  return (
    <InputContainer>
      <label>
        <input autoComplete="off" placeholder=" " {...rest} />
        <span>{label}</span>
      </label>
      <span>{error}</span>
    </InputContainer>
  );
};

export default TextInput;

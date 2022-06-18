import { FormsContainer } from "./style.forms";

import TextInput from "../input";

const loginFields = ["Digite seu email:", "Digite sua senha:"];
const signinFields = ["Nome completo:", "Senha:", "Confirm sua senha"];

const Forms = ({ page }) => {
  return (
    <FormsContainer>
      {page === "login"
        ? loginFields.map((item, index) => (
            <TextInput key={index} label={item} />
          ))
        : signinFields.map((item, index) => (
            <TextInput key={index} label={item} />
          ))}
    </FormsContainer>
  );
};

export default Forms;

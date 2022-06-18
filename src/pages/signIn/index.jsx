import FormBackground from "../../components/formBackground";
import Sidebar from "../../components/sidebar";

import TextInput from "../../components/input";
import Button from "../../components/button";

import Image1 from "../../assets/teste.png";
import Image2 from "../../assets/colmeia.png";
import Image3 from "../../assets/login512.png";
import Image4 from "../../assets/siginin512.png";

import Forms from "../../components/forms";

import "./style.css";

const FormSigninPage = () => {
  return (
    <FormBackground>
      <Sidebar avatar={Image4} alternative={"Imagem Colmeia"} />
      <div className="teste">
        <h2>Cadastre-se</h2>
        <TextInput label="Seu nome completo" />
        <TextInput label="Seu email:" />
        <TextInput label="Seu CPF" />
        <TextInput label="Sua senha:" />
        <TextInput label="Confirme sua senha" />
        {/* <Forms page="login" /> */}
        <Button>Cadastrar</Button>
        <div className="Message">
          <span>Já possui uma conta?</span>
          <a href="#">Entre!</a>
        </div>
        {/* <button className="button">Cadastrar</button> */}
      </div>
    </FormBackground>
  );
};

export default FormSigninPage;

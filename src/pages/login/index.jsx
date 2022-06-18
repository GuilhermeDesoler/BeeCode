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

const FormLoginPage = () => {
  return (
    <FormBackground>
      <Sidebar avatar={Image3} alternative={"Imagem Colmeia"} />
      <div className="teste">
        <h2>Login</h2>
        <TextInput label="Digite o seu email:" />
        <TextInput label="Digite a sua senha:" />
        {/* <Forms page="login" /> */}
        <Button>Entrar</Button>
        <div className="Message">
          <span>Não possui uma conta?</span>
          <a href="#">Cadastre-se!</a>
        </div>
        {/* <button className="button">Cadastrar</button> */}
      </div>
    </FormBackground>
  );
};

export default FormLoginPage;

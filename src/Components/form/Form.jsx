import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { MailSVG } from "../Svg/Mail";
import { PhoneSGV } from "../Svg/phone";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export const Form = () => {
  const navigate = useNavigate();
  const [numero, setNumero] = useState(undefined);
  const [correo, setCorreo] = useState("");
  const [disabled, setDisabled] = useState(true);
  // submit
  const sumit = (e) => {
    e.preventDefault();
    if (numero <= 10 && correo.trim() == "")
      return swal({
        title: "Error!",
        text: "Complete todos los campos",
        icon: "error",
      });
    // set keys
    localStorage.setItem("numero", numero);
    localStorage.setItem("correo", correo);
    swal({
      title: "Cuenta creada!",
      text: "successfully",
      icon: "success",
    });
    return navigate("/", { replace: true });
  };

  const changeLetters = (e, type) => {
    type(e.target.value);
    if (numero && correo.trim() !== "") setDisabled(false);
    else setDisabled(true);
  };

  return (
    <FormContainer onSubmit={sumit}>
      <div className="inputs">
        <label>Ingresa tu celular</label>

        <PhoneSGV />
        <input
          className="input-icon"
          type={"number"}
          placeholder={"a 10 digitos"}
          maxLength={10}
          value={numero}
          onChange={(e) => changeLetters(e, setNumero)}
        />
      </div>
      <div className="inputs">
        <label>Y tu correo</label>
        <MailSVG />
        <input
          type={"email"}
          placeholder={"tucorreo@mail.com"}
          value={correo}
          onChange={(e) => changeLetters(e, setCorreo)}
        />
      </div>
      <div className="Footer">
        <div className="text">
          <p>
            Al continuar, aceptas los{" "}
            <span className="text-green">
              términos y condiciones y el aviso de privacidad
            </span>
          </p>
        </div>
        <div className="buttons">
          <Button text={"Crear Cuenta"} width={"100%"} disabled={disabled} />
          {/* <div className="separador" /> */}
          <Button text={"Iniciar sesion"} width={"100%"} disabled={true} />
        </div>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;

  left: 6.67%;
  right: 6.67%;
  top: 30.9%;
  bottom: 0;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;

    /* Neutrales/black */

    color: #4a4a4a;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 90%;
    background: #ffffff;
    padding: 0.7rem;
    margin-bottom: 18px;
    font-size: 16px;
    border: 2px solid #ffffff;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    padding-left: 39px;
  }

  .Footer {
    position: relative;
    top: 30%;
  }

  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    padding-bottom: 26px;
    /* Neutrales/black */

    color: #4a4a4a;
  }

  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .buttons button {
    margin-bottom: 25px;
  }
`;

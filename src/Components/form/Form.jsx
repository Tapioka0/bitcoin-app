import styled from "styled-components";
import { Button } from "../Button";
import { MailSVG } from "../Svg/Mail";
import { PhoneSGV } from "../Svg/phone";

export const Form = () => {
  return (
    <FormContainer>
      <div className="inputs">
        <label>Ingresa tu celular</label>

        <PhoneSGV />
        <input
          className="input-icon"
          type={"text"}
          placeholder={"a 10 digitos"}
          maxLength={10}
          value={""}
        />
      </div>
      <div className="inputs">
        <label>Y tu correo</label>
        <MailSVG />
        <input
          type={"email"}
          placeholder={"tucorreo@mail.com"}
          maxLength={10}
          value={""}
        />
      </div>
      <div className="Footer">
        <div className="text">
          <p>
            Al continuar, aceptas los
            <span className="text-green">
              términos y condiciones y el aviso de privacidad{" "}
            </span>
          </p>
        </div>
        <div className="buttons">
          <Button text={"Crear Cuenta"} width={"100%"} />
          <div className="separador" />
          <Button text={"Iniciar sesion"} width={"100%"} />
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
    top: 26%;
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
  .separador {
    padding-top: 16px;
  }
`;

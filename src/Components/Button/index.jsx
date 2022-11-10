import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export const Button = ({ text, cases, width, disabled }) => {
  const navigate = useNavigate();
  return (
    <Boton
      width={width}
      disabled={disabled}
      type={"submit"}
      onClick={() => {
        if (cases === 1) return navigate("/registro", { replace: true });
        else if (cases === 2) return window.location.reload();
      }}
    >
      {text}
    </Boton>
  );
};

const Boton = styled.button`
  cursor: pointer;
  width: ${(props) => props.width ?? ""};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 26px 10px 34px;
  color: #fff;
  max-width: 600px;
  /* Verdes/Primary */
  font-family: "Inter";
  background: #198c9b;
  border-radius: 20px;
`;

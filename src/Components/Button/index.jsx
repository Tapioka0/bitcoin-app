import styled from "styled-components";

export const Button = ({ text }) => {
  return <Boton>{text}</Boton>;
};

const Boton = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 26px 10px 34px;
  color: #fff;

  /* Verdes/Primary */

  background: #198c9b;
  border-radius: 20px;
`;

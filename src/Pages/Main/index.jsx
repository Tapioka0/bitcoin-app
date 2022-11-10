import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Components/Button";
import { TripleSwitch } from "../../Components/tripleSwitch";
import { MainHeader } from "../../layouts/Header/MainHeader";

export const MainPage = () => {
  const [moneda, setMoneda] = useState("left");

  return (
    <Container>
      <MainHeader />
      <h1>Valor de Bitcoin actual</h1>

      <TripleSwitch setMoneda={setMoneda} />
      <div className="detalles">
        <div className="title">
          <p>Detalle</p>
        </div>

        <div className="description">
          <p>United States Dollar</p>
        </div>

        <div className="content">
          <p>$39,815.3417</p>
        </div>
      </div>
      <footer>
        <Button text={"Actualizar"} width={"100%"} disabled={false} />
      </footer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  h1 {
    position: absolute;
    left: 20.12%;
    top: 10.29%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #2c3747;
  }
  .detalles {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 53.28%;
    bottom: 20%;

    /* Neutrales/BG */

    background: #f6f7f8;
    box-shadow: 0px 4px 16px rgba(36, 22, 77, 0.1);
    border-radius: 20px;
  }

  .title {
    position: absolute;
    left: 5%;
    top: 5.35%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Verdes/Primary */

    color: #198c9b;
  }

  .description {
    position: absolute;
    left: 5.45%;

    top: 27.65%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Azules/Gray Cobalt */

    color: #5c7190;
  }

  .content {
    box-sizing: border-box;

    position: absolute;
    left: 5.13%;
    right: 5.13%;
    top: 50.95%;

    background: #ffffff;
    padding: 15px;

    border: 2px solid #ffffff;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
  }
  .content p {
    width: 102px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* Neutrales/Gray */

    color: #7b8186;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0px 20px 30px 20px;
  }
`;

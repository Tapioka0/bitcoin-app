import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../Components/Button";
import { TripleSwitch } from "../../Components/tripleSwitch";
import { MainHeader } from "../../layouts/Header/MainHeader";

export const MainPage = () => {
  const [moneda, setMoneda] = useState("left");
  const [price, setPrice] = useState(0);

  let baseURL = "https://api.blockchain.com/v3/exchange/tickers/BTC-";
  const getPrice = async () => {
    if (moneda == "left") {
      const get = await axios(baseURL + "USD");
      setPrice(get.data.last_trade_price);
    } else if (moneda == "center") {
      const get = await axios(baseURL + "GBP");
      setPrice(get.data.last_trade_price);
    } else if (moneda == "right") {
      const get = await axios(baseURL + "EUR");
      setPrice(get.data.last_trade_price);
    }
  };

  useEffect(() => {
    getPrice();
  }, [moneda]);

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
          <p>
            {moneda == "left"
              ? "United States Dollar"
              : moneda == "center"
              ? "Great Britain pound"
              : "Euro"}
          </p>
        </div>

        <div className="content">
          <p>${price}</p>
        </div>
      </div>
      <footer>
        <Button text={"Actualizar"} width={"100%"} disabled={false} cases={2} />
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
    left: 40%;
    top: 10.29%;
    margin-left: auto;
    margin-right: auto;

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
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 620px) {
    h1 {
      left: 22%;
    }
  }
`;

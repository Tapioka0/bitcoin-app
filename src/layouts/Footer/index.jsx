import styled from "styled-components";
import { Button } from "../../Components/Button";

export const OnboardingFooter = () => {
  return (
    <Footer>
      <div className="title">
        <h1>¿Cuál es el valor actual del BTC?</h1>
      </div>

      <div className="texto">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="buttons">
          <Button text={"Iniciar ➜"} />
        </div>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 57.66%;
  bottom: 0%;

  background: #ffffff;
  border-radius: 60px 0px 0px 0px;

  .title {
    position: absolute;
    left: 13.06%;
    right: 13.33%;
    top: 12.97%;
    //bottom: 28.28%;
  }
  .title h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #000000;
  }

  .texto {
    position: absolute;
    left: 9.44%;
    right: 9.72%;
    top: 45.47%;
    text-align: center;
    // bottom: 17.03%;
  }

  .texto p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #2c3747;
  }
  .buttons {
    padding-top: 6.6%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

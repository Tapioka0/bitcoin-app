import styled from "styled-components";
import { TripleSwitch } from "../../Components/tripleSwitch";
import { MainHeader } from "../../layouts/Header/MainHeader";

export const MainPage = () => {
  return (
    <Container>
      <MainHeader />
      <h1>Valor de Bitcoin actual</h1>

      <TripleSwitch />
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
    //bottom: 81.82%;

    /* H1 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 117% */

    text-align: center;

    /* Azules/Dark Cobalt */

    color: #2c3747;
  }
`;

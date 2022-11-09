import styled from "styled-components";
import { Form } from "../../Components/form/Form";
import { Header } from "../../layouts/Header/Header";

export const RegistroPage = () => {
  return (
    <Container>
      <Header title={"Bitcoin APP"} />
      <h1>Crea tu cuenta</h1>
      <Form />
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
    left: 22.12%;
    right: 22.44%;
    top: 19.29%;
    //bottom: 81.82%;

    /* H1 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height, or 117% */

    text-align: center;

    /* Azules/Dark Cobalt */

    color: #2c3747;
  }
`;

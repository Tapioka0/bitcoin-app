import styled from "styled-components";
import { Header } from "../../layouts/Header/Header";

export const OnboardingPage = () => {
  return (
    <Container>
      <Header title={"Bitcoin APP"} />
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
`;

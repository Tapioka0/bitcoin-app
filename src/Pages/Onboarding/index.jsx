import styled from "styled-components";
import { DataAnalyticsSVG } from "../../Components/Svg/dataAnalytics";
import { OnboardingFooter } from "../../layouts/Footer";
import { Header } from "../../layouts/Header/Header";
import { MainPage } from "../Main";
export const OnboardingPage = () => {
  const numero = localStorage.getItem("numero");
  return (
    <>
      {numero ? (
        <MainPage />
      ) : (
        <Container>
          <Header title={"Bitcoin APP"} />
          <DataAnalyticsSVG />
          <OnboardingFooter />
        </Container>
      )}
    </>
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
`;

import styled from "styled-components";
import { ArroyLeft } from "../../Components/Svg/Arrow";

export const MainHeader = () => {
  const clearData = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Head>
      <div className="icon" onClick={() => clearData()}>
        <ArroyLeft />
      </div>

      <div className="text">
        <p>Resumen Bitcoint</p>
      </div>
      {/* for space-between */}
      <div></div>
    </Head>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-left: 5%;

  .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #7b8186;
    padding-right: 38px;
  }
`;

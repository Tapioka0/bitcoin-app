import styled from "styled-components";

export const Header = ({ title }) => {
  return (
    <>
      <Head>
        <p>{title}</p>
      </Head>
    </>
  );
};

const Head = styled.header`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 33.11%;
  // right: 0;
  text-align: center;
  top: 10.09%;
  //bottom: 89.38%;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: right;

    /* Azules/Gray Cobalt */

    color: #5c7190;
  }
`;

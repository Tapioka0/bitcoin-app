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
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6.09%;
  p {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: right;
    color: #5c7190;
  }
`;

import styled from "styled-components";

export const MailSVG = () => {
  return (
    <Div>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5.5C3.45228 5.5 3 5.95228 3 6.5V18.5C3 19.0477 3.45228 19.5 4 19.5H20C20.5477 19.5 21 19.0477 21 18.5V6.5C21 5.95228 20.5477 5.5 20 5.5H4ZM1 6.5C1 4.84772 2.34772 3.5 4 3.5H20C21.6523 3.5 23 4.84772 23 6.5V18.5C23 20.1523 21.6523 21.5 20 21.5H4C2.34772 21.5 1 20.1523 1 18.5V6.5Z"
          fill="#1BBCB2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.18076 5.92654C1.49748 5.47409 2.12101 5.36405 2.57346 5.68077L12 12.2793L21.4265 5.68077C21.879 5.36405 22.5025 5.47409 22.8192 5.92654C23.1359 6.37899 23.0259 7.00252 22.5735 7.31923L12.5735 14.3192C12.2291 14.5603 11.7709 14.5603 11.4265 14.3192L1.42653 7.31923C0.974083 7.00252 0.864048 6.37899 1.18076 5.92654Z"
          fill="#1BBCB2"
        />
      </svg>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 122px;
  left: 15px;
`;

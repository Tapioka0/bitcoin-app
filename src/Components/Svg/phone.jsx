import styled from "styled-components";

export const PhoneSGV = () => {
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
          d="M7 3.5C6.44772 3.5 6 3.94772 6 4.5V20.5C6 21.0523 6.44772 21.5 7 21.5H17C17.5523 21.5 18 21.0523 18 20.5V4.5C18 3.94772 17.5523 3.5 17 3.5H7ZM4 4.5C4 2.84315 5.34315 1.5 7 1.5H17C18.6569 1.5 20 2.84315 20 4.5V20.5C20 22.1569 18.6569 23.5 17 23.5H7C5.34315 23.5 4 22.1569 4 20.5V4.5Z"
          fill="#1BBCB2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 18.5C11 17.9477 11.4477 17.5 12 17.5H12.01C12.5623 17.5 13.01 17.9477 13.01 18.5C13.01 19.0523 12.5623 19.5 12.01 19.5H12C11.4477 19.5 11 19.0523 11 18.5Z"
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
  left: 15px;
  top: 34px;
`;

import { useState } from "react";
import styled from "styled-components";

export const TripleSwitch = ({ setMoneda }) => {
  const [switchPosition, setSwitchPosition] = useState("left");
  const [animation, setAnimation] = useState(null);

  const getSwitchAnimation = (value) => {
    //set Animation
    if (value === "center" && switchPosition === "left")
      setAnimation("left-to-center");
    else if (value === "right" && switchPosition === "center")
      setAnimation("center-to-right");
    else if (value === "center" && switchPosition === "right")
      setAnimation("right-to-center");
    else if (value === "left" && switchPosition === "center")
      setAnimation("center-to-left");
    else if (value === "right" && switchPosition === "left")
      setAnimation("left-to-right");
    else if (value === "left" && switchPosition === "right")
      setAnimation("right-to-left");
    /// set state
    setMoneda(value);

    setSwitchPosition(value);
  };
  return (
    <Div>
      <div className="titlet">
        <p>Moneda</p>
      </div>

      <div className="main-container">
        <div className={`switch ${animation} ${switchPosition}-position`}></div>
        <input
          defaultChecked
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="left"
          type="radio"
          value="left"
        />
        <label
          className={`left-label ${switchPosition === "left" && "green-font"}`}
          htmlFor="left"
        >
          <h4>USD</h4>
        </label>

        <input
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="center"
          type="radio"
          value="center"
        />
        <label
          className={`center-label ${
            switchPosition === "center" && "green-font"
          }`}
          htmlFor="center"
        >
          <h4>GBP</h4>
        </label>

        <input
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="right"
          type="radio"
          value="right"
        />
        <label
          className={`right-label ${
            switchPosition === "right" && "green-font"
          }`}
          htmlFor="right"
        >
          <h4>EUR</h4>
        </label>
      </div>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  justify-content: center;
  display: flex;
  left: 5%;
  right: 5%;
  top: 17.47%;
  bottom: 60.22%;
  flex-direction: row;
  background: #ffffff;
  border-radius: 20px;

  .titlet {
    padding-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* black */

    color: #4a4a4a;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    color: #5c7190;

    z-index: 10;
    cursor: pointer;
  }

  h4 {
    margin: 0;
    font-weight: 500;
    font-family: "Inter";
  }

  .green-font {
    color: #1bbcb2 !important;
  }

  .main-container {
    display: inline-block;
    vertical-align: middle;
    width: 250px;
    height: 50px;
    border-radius: 100px;
    background-color: #f6f7f8;
    position: absolute;
    top: 40%;
    left: 37%;
  }

  .switch {
    height: 44px;
    width: 80px;
    background-color: white;
    border-radius: 100px;
    gap: 10px;
    position: absolute;
    left: 3px;
    top: 3px;
    transition: ease-in;
  }

  /*---------------- LEFT ------------------- */
  .switch.left-to-center {
    animation-name: leftToCenter;
    animation-duration: 0.5s;
  }

  .switch.left-to-right {
    animation-name: leftToRight;
    animation-duration: 0.5s;
  }

  .switch.left-position {
    left: 3px;
  }

  .left-label {
    position: absolute;
  }

  #left + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  #left:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  @media only screen and (max-width: 620px) {
    .main-container {
      left: 15%;
    }
  }
  @keyframes leftToCenter {
    from {
      left: 3px;
    }
    to {
      left: 85px;
    }
  }

  @keyframes leftToRight {
    from {
      left: 3px;
    }
    to {
      left: 167px;
    }
  }

  /* -------------------- center ------------------ */
  .switch.center-to-left {
    animation-name: centerToLeft;
    animation-duration: 0.5s;
  }

  .switch.center-to-right {
    animation-name: centerToRight;
    animation-duration: 0.5s;
  }

  .switch.center-position {
    left: 85px;
  }

  .center-label {
    position: absolute;
    left: 85px;
  }

  #center + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  #center:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  @keyframes centerToLeft {
    from {
      left: 85px;
    }
    to {
      left: 3px;
    }
  }

  @keyframes centerToRight {
    from {
      left: 85px;
    }
    to {
      right: 1px;
    }
  }

  /* ------------------- RIGHT ------------------- */
  .switch.right-to-left {
    animation-name: rightToLeft;
    animation-duration: 0.5s;
  }

  .switch.right-to-center {
    animation-name: rightToCenter;
    animation-duration: 0.5s;
  }

  .switch.right-position {
    left: 167px;
  }

  .right-label {
    position: absolute;
    right: 2px;
  }

  #right + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  #right:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    border-radius: 100px;
  }

  @keyframes rightToLeft {
    from {
      left: 167px;
    }
    to {
      left: 3px;
    }
  }

  @keyframes rightToCenter {
    from {
      left: 167px;
    }
    to {
      right: 85px;
    }
  }
`;

import * as React from "react";
import S from "./MiniBtn.module.scss";
import { useState } from "react";
import { transferFromDelay } from "../../../store/BasketReduser";

const MiniBtn = (props) => {
  const [active, setActive] = useState(false);

  const mouseActive = () => {
    setActive(true);
  };
  const mouseLeave = () => {
    setActive(false);
  };
  const handler = () => {
    props.action();
  };
  return (
    <div
      className={S.body}
      onMouseEnter={mouseActive}
      onMouseLeave={mouseLeave}
    >
      {active && <div className={S.text}>{props.text}</div>}
      <button
        onClick={handler}
        className={`${S.btn} ${props.back && S.colorReverse}`}
      >
        {<props.img />}
      </button>
    </div>
  );
};

export default MiniBtn;

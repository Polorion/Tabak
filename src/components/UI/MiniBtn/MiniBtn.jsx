import * as React from "react";
import S from "./MiniBtn.module.scss";
import { useState } from "react";
import { transferFromDelay } from "../../../store/BasketReduser";

const MiniBtn = (props) => {
  console.log(props.action);
  const [active, setActive] = useState(false);

  const transferFromDelay = () => {
    props.transferFromDelay();
  };
  const mouseActive = () => {
    setActive(true);
  };
  const mouseLeave = () => {
    setActive(false);
  };
  const handler = () => {
    props.action(props.id);
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

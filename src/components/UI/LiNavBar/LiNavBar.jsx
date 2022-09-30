import * as React from "react";
import S from "./LiNavBar.module.scss";
import { ReactComponent as Img } from "../../../assets/img/18.svg";
import { useEffect, useRef, useState } from "react";
import WindowNavBar from "../../Header/HeaderNavBar/WindowNavBar/WindowNavBar";

const LiNavBar = (props) => {
  const actionMouse = () => {
    props.setOpenOrClosedWindow(true);
  };
  const actionMouseLeave = () => {
    props.setOpenOrClosedWindow(false);
  };

  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className={S.li}
      onMouseEnter={actionMouse}
      onMouseLeave={actionMouseLeave}
    >
      <div className={S.title}>{props.title}</div>
      <div>{props.img && <Img />}</div>

      {false && (
        <WindowNavBar
          cordinat={props.cordinat}
          section={props.section}
          setOpenOrClosedWindow={props.setOpenOrClosedWindow}
        />
      )}
    </li>
  );
};

export default LiNavBar;

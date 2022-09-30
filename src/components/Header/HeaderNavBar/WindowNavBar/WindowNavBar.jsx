import * as React from "react";
import * as ReactDOM from "react-dom";

import S from "./WindowNavBar.module.scss";
import WindowSection from "./WindowSection/WindowSection";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";

const WindowNavBar = (props) => {
  const node = document.querySelector("#barModal");
  if (!node) {
    return;
  }

  return ReactDOM.createPortal(
    <div
      style={{
        top: `${props.cordinat.scrolltop + 42}px`,
        left: `${props.cordinat.scrollleft - 10}px`,
      }}
      className={`${S.body} `}
    >
      {props.section?.map((el, i) => {
        return (
          <WindowSection
            el={el}
            key={GeneratorRandomString()}
            setOpenOrClosedWindow={props.setOpenOrClosedWindow}
          />
        );
      })}
    </div>,
    node
  );
};

export default WindowNavBar;

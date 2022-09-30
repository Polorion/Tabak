import * as React from "react";
import S from "./MyButton.module.scss";

const MyButton = (props) => {
  return (
    <button onClick={props.action && props.action} className={S.btn}>
      <p>{props.title}</p>
    </button>
  );
};

export default MyButton;

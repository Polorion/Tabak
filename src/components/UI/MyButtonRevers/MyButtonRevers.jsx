import * as React from "react";
import S from "./MyButtonRevers.module.scss";

const MyButtonRevers = (props) => {
  return (
    <button onClick={props.action && props.action} className={S.btn}>
      <p>{props.title}</p>
    </button>
  );
};

export default MyButtonRevers;

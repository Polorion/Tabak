import * as React from "react";
import S from "./MiniBtn.module.scss";

const MiniBtn = (props) => {
  return <button className={S.btn}>{<props.img />}</button>;
};

export default MiniBtn;

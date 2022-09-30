import * as React from "react";
import S from "./Slide.module.scss";
import IMG from "../../../../../assets/img/sliderIMG/sigar.jpg";

const Slide = (props) => {
  return (
    <div className={`${S.item} `}>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Slide;

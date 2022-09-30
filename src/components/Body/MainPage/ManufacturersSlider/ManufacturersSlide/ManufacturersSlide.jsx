import * as React from "react";
import S from "./ManufacturersSlide.module.scss";

const ManufacturersSlide = (props) => {
  return (
    <div className={S.body}>
      <div className={S.img}>
        <img src={props.img} alt="" />
      </div>
      <div className={S.info}> Lorem ipsum dolor sit.</div>
    </div>
  );
};

export default ManufacturersSlide;

import * as React from "react";
import S from "./ItemInSlide.module.scss";
import MyButton from "../../../../UI/MyButton/MyButton";
import Rating from "./Rating/Rating";

const ItemInSlide = (props) => {
  return (
    <div className={S.body}>
      <div className={S.header}>
        <div className={S.headerPromo}></div>
        <div className={S.headerImg}>
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className={S.price}>{props.price} rub</div>
      <div className={S.info}>{props.info}</div>
      <div className={S.reiting}>
        <Rating rating={3} />
      </div>
      <MyButton title={"Подробнее"} />
    </div>
  );
};

export default ItemInSlide;

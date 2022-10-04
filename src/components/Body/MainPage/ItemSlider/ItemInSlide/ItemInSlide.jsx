import * as React from "react";
import S from "./ItemInSlide.module.scss";
import MyButton from "../../../../UI/MyButton/MyButton";
import Rating from "./Rating/Rating";
import BlockBuyBlock from "../../../../UI/BlockBuyBlock/BlockBuyBlock";

const ItemInSlide = (props) => {
  return (
    <div className={S.body}>
      <div className={S.header}>
        <div className={S.headerPromo}></div>
        <div className={S.headerImg}>
          <img src={props.el.img} alt="" />
        </div>
      </div>
      <div className={S.price}>{props.el.price} rub</div>
      <div className={S.info}>{props.el.title}</div>
      <div className={S.reiting}>
        <Rating rating={3} />
      </div>{" "}
      <div className={S.buyBlock}>
        <BlockBuyBlock
          count={props.count}
          el={props.el}
          goItemToBasket={props.goItemToBasket}
        />
      </div>
      <MyButton title={"Подробнее"} />
    </div>
  );
};

export default ItemInSlide;

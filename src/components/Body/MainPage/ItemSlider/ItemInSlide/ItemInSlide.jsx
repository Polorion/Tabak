import * as React from "react";
import S from "./ItemInSlide.module.scss";
import MyButton from "../../../../UI/MyButton/MyButton";
import Rating from "./Rating/Rating";
import BlockBuyBlock from "../../../../UI/BlockBuyBlock/BlockBuyBlock";
import MiniBtn from "../../../../UI/MiniBtn/MiniBtn";
import { ReactComponent as Compare } from "../../../../../assets/img/miniBtn/sravnit.svg";
import { NavLink } from "react-router-dom";

const ItemInSlide = (props) => {
  const goToCompare = () => {
    props.goItemToCompare(props.el);
  };
  return (
    <div className={S.body}>
      <div className={S.header}>
        <div className={S.headerPromo}></div>
        <div className={S.headerImg}>
          <img src={props.el.img} alt="" />
          <div className={S.controlBtn}>
            <MiniBtn
              text={"Сравнить"}
              id={props.el.id}
              img={Compare}
              action={goToCompare}
            />
            <NavLink to={"Compare"}>vcvc </NavLink>
          </div>
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

import * as React from "react";
import S from "./HeaderBasket.module.scss";
import { ReactComponent as Basket } from "../../../../assets/img/basket.svg";
import { NavLink } from "react-router-dom";
import TotalPriceBasket from "../../../../HOC/TotalPriceBasket/TotalPriceBasket";

const HeaderBasket = (props) => {
  return (
    <NavLink to={"/basket"} className={S.basket}>
      <div className={S.imgBasket}>
        <Basket />
        <div className={S.basketCount}>{props.countItem}</div>
      </div>
      <div className={S.infoBasket}>
        <p className={S.sum}>Сумма</p>
        <div className={S.totalPrice}>{props.totalPrice}p</div>
      </div>
    </NavLink>
  );
};

export default TotalPriceBasket(HeaderBasket);

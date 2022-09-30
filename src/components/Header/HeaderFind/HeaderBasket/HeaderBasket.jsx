import * as React from "react";
import S from "./HeaderBasket.module.scss";
import { ReactComponent as Basket } from "../../../../assets/img/basket.svg";
import { NavLink } from "react-router-dom";

const HeaderBasket = () => {
  return (
    <NavLink to={"/basket"} className={S.basket}>
      <div className={S.imgBasket}>
        <Basket />
        <div className={S.basketCount}>0</div>
      </div>
      <div className={S.infoBasket}>
        <p className={S.sum}>Сумма</p>
        <div className={S.totalPrice}>0p</div>
      </div>
    </NavLink>
  );
};

export default HeaderBasket;

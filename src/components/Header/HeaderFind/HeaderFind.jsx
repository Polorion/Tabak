import * as React from "react";
import logo from "../../../assets/img/logo.png";
import { ReactComponent as Basket } from "../../../assets/img/basket.svg";
import S from "./HeaderFind.module.scss";
import MyButton from "../../UI/MyButton/MyButton";

const HeaderFind = () => {
  return (
    <div className={S.body}>
      <div className={S.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={S.find}>
        <select className={S.select} name="" id="">
          <option value="">все разделы</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <div className={S.input}>
          <input type="text" placeholder={"поиск товаров"} />
        </div>
      </div>
      <div className={S.basket}>
        <div className={S.imgBasket}>
          <Basket />
          <div className={S.basketCount}>0</div>
        </div>
        <div className={S.infoBasket}>
          <p className={S.sum}>Сумма</p>
          <div className={S.totalPrice}>0p</div>
        </div>
      </div>
      <div className={S.btnLogin}>
        <MyButton title={"Login"} />
      </div>
    </div>
  );
};

export default HeaderFind;

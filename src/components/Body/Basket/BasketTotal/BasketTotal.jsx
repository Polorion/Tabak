import * as React from "react";
import S from "./BasketTotal.module.scss";
import MyButton from "../../../UI/MyButton/MyButton";

const BasketTotal = () => {
  return (
    <div className={S.rightBasket}>
      <div className={S.body}>
        <div className={S.price}>К оплате:</div>
        <div className={S.total}>84 руб</div>
        <div className={S.findAnyMarket}>
          Посмотреть наличие товаров в магазинах
        </div>
      </div>
      <div className={S.buy}>
        <MyButton title={"Оформить заказ"} />
      </div>
    </div>
  );
};

export default BasketTotal;

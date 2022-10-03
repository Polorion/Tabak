import * as React from "react";
import S from "./BasketTotal.module.scss";
import MyButton from "../../../UI/MyButton/MyButton";
import TotalPriceBasket from "../../../../HOC/TotalPriceBasket/TotalPriceBasket";

const BasketTotal = (props) => {

  return (
    <div className={S.rightBasket}>
      <div className={S.body}>
        <div className={S.price}>К оплате:</div>
        <div className={S.total}>{props.totalPrice} руб</div>
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

export default TotalPriceBasket(BasketTotal);

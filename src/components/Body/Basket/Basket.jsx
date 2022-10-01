import * as React from "react";
import S from "./Basket.module.scss";
import PathHistory from "../PathHistory/PathHistory";
import BtnControl from "./BtnControl/BtnControl";
import Item from "./Item/Item";
import BasketTotal from "./BasketTotal/BasketTotal";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";
import { setDelayed, transferFromDelay } from "../../../store/BasketReduser";

const Basket = (props) => {
  const basket = props.delayed
    ? props.basket.basketActive
    : props.basket.basketDelayed;

  return (
    <PathHistory>
      <div className={S.basket}>
        <div className={S.title}> Карзина</div>
        <div className={S.body}>
          <div className={S.leftBasket}>
            <BtnControl setDelayed={props.setDelayed} />
            <div className={S.table}>
              <div className={S.headerTable}>
                <div className={S.item}>Товары</div>
                <div className={S.price}>Цена, ₽</div>
                <div className={S.count}>Количество</div>
                <div className={S.total}>Всего, ₽</div>
                <div className={S.inviz}></div>
              </div>
              {basket.map((el) => {
                return (
                  <Item
                    key={GeneratorRandomString()}
                    upCount={props.upCount}
                    title={el.title}
                    article={el.article}
                    price={el.price}
                    count={el.count}
                    id={el.id}
                    del={props.del}
                    delayed={props.delayed}
                    transferFromDelay={props.transferFromDelay}
                  />
                );
              })}
            </div>
          </div>
          <BasketTotal />
        </div>
      </div>
    </PathHistory>
  );
};

export default Basket;

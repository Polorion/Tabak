import * as React from "react";
import S from "./Basket.module.scss";
import PathHistory from "../../../HOC/PathHistory/PathHistory";
import img from "../../../assets/img/sliderIMG/tabak.jpg";
import MiniBtn from "../../UI/MiniBtn/MiniBtn";
import { ReactComponent as Flag } from "../../../assets/img/miniBtn/flag.svg";
import { ReactComponent as Compare } from "../../../assets/img/miniBtn/sravnit.svg";
import { ReactComponent as Garbage } from "../../../assets/img/miniBtn/garbage.svg";
import MyButton from "../../UI/MyButton/MyButton";
import BtnControl from "./BtnControl/BtnControl";

const Basket = () => {
  return (
    <PathHistory>
      <div className={S.basket}>
        <div className={S.title}> Карзина</div>
        <div className={S.body}>
          <div className={S.leftBasket}>
            <BtnControl />
            <div className={S.table}>
              <div className={S.headerTable}>
                <div className={S.item}>Товары</div>
                <div className={S.price}>Цена, ₽</div>
                <div className={S.count}>Количество</div>
                <div className={S.total}>Всего, ₽</div>
                <div className={S.inviz}></div>
              </div>
              <div className={S.bodyTable}>
                <div className={S.item}>
                  <div className={S.itemImg}>
                    <img src={img} alt="" />
                  </div>
                  <div className={S.itemInfo}>
                    <div className={S.infoTitle}>
                      Фильтры сигаретные Cartel Slim Long 6/22 100
                    </div>
                    <div className={S.infoArticle}>Артикул: OP200001843</div>
                  </div>
                </div>
                <div className={S.price}>40</div>
                <div className={S.count}>
                  <button className={S.btn}>+</button>
                  <div className={S.countItem}>20</div>
                  <button className={S.btn}>-</button>
                </div>
                <div className={S.total}>400</div>
                <div className={S.helpBtn}>
                  <MiniBtn img={Garbage} />
                  <MiniBtn img={Flag} />
                  <MiniBtn img={Compare} />
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </PathHistory>
  );
};

export default Basket;

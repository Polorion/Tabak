import * as React from "react";
import S from "./Item.module.scss";
import img from "../../../../assets/img/sliderIMG/tabak.jpg";
import MiniBtn from "../../../UI/MiniBtn/MiniBtn";
import { ReactComponent as Garbage } from "../../../../assets/img/miniBtn/garbage.svg";
import { ReactComponent as Flag } from "../../../../assets/img/miniBtn/flag.svg";
import { ReactComponent as Compare } from "../../../../assets/img/miniBtn/sravnit.svg";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";
import { transferFromDelay } from "../../../../store/BasketReduser";

const Item = (props) => {
  const totalPrice = props.count * props.price;
  const handlerUp = () => {
    props.upCount(props.id, "up");
  };
  const handlerDown = () => {
    props.count > 0 && props.upCount(props.id, "down");
  };
  const handlerDelete = () => {
    props.del(props.id);
  };

  return (
    <div className={S.bodyTable}>
      <div className={S.item}>
        <div className={S.itemImg}>
          <img src={img} alt="" />
        </div>
        <div className={S.itemInfo}>
          <div className={S.infoTitle}>{props.title}</div>
          <div className={S.infoArticle}>Артикул:{props.article}</div>
        </div>
      </div>
      <div className={S.price}>{props.price}</div>
      <div className={S.count}>
        <button onClick={handlerUp} className={S.btn}>
          +
        </button>
        <div className={S.countItem}>{props.count}</div>
        <button onClick={handlerDown} className={S.btn}>
          -
        </button>
      </div>
      <div className={S.total}>{totalPrice}</div>
      <div className={S.helpBtn}>
        <MiniBtn
          text={"Удалить"}
          id={props.id}
          img={Garbage}
          action={handlerDelete}
        />
        <MiniBtn
          text={props.delayed ? "отложить" : "вложить"}
          id={props.id}
          img={Flag}
          action={props.transferFromDelay}
        />
        {props.delayed && (
          <MiniBtn text={"Сравнить"} id={props.id} img={Compare} />
        )}
      </div>
    </div>
  );
};

export default Item;

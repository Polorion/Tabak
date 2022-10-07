import * as React from "react";
import S from "./Item.module.scss";
import img from "../../../../assets/img/sliderIMG/tabak.jpg";
import MiniBtn from "../../../UI/MiniBtn/MiniBtn";
import { ReactComponent as Garbage } from "../../../../assets/img/miniBtn/garbage.svg";
import { ReactComponent as Flag } from "../../../../assets/img/miniBtn/flag.svg";
import { ReactComponent as Compare } from "../../../../assets/img/miniBtn/sravnit.svg";

const Item = (props) => {
  const totalPrice = props.count * props.price;
  const handlerUp = () => {
    props.setCountActive(props.id, "up");
  };
  const handlerUpDelay = () => {
    props.setCountDelay(props.id, "up");
  };
  const handlerDown = () => {
    props.count > 0 && props.setCountActive(props.id, "down");
  };
  const handlerDownDelay = () => {
    props.count > 0 && props.setCountDelay(props.id, "down");
  };
  const handlerDeleteActive = () => {
    props.delActive(props.id);
  };
  const handlerDeleteDelay = () => {
    props.delDelay(props.id);
  };
  const transferItemFromDelay = () => {
    props.transferItemFromDelay(props.id);
  };

  const transferItemFromActive = () => {
    props.transferItemFromActive(props.id);
  };
  const goToCompare = () => {
    props.goToCompare(props.el);
  };

  return (
    <div className={S.bodyTable}>
      <div className={S.item}>
        <div className={S.itemImg}>
          <img src={props.img ? props.img : img} alt="" />
        </div>
        <div className={S.itemInfo}>
          <div className={S.infoTitle}>{props.title}</div>
          <div className={S.infoArticle}>Артикул:{props.article}</div>
        </div>
      </div>
      <div className={S.price}>{props.price}</div>
      <div className={S.count}>
        <button
          onClick={props.delayed ? handlerUp : handlerUpDelay}
          className={S.btn}
        >
          +
        </button>
        <div className={S.countItem}>{props.count}</div>
        <button
          onClick={props.delayed ? handlerDown : handlerDownDelay}
          className={S.btn}
        >
          -
        </button>
      </div>
      <div className={S.total}>{totalPrice}</div>
      <div className={S.helpBtn}>
        <MiniBtn
          text={"Удалить"}
          id={props.id}
          img={Garbage}
          action={props.delayed ? handlerDeleteActive : handlerDeleteDelay}
        />
        <MiniBtn
          text={props.delayed ? "отложить" : "вложить"}
          id={props.id}
          img={Flag}
          action={
            props.delayed ? transferItemFromDelay : transferItemFromActive
          }
        />
        {props.delayed && (
          <MiniBtn
            text={"Сравнить"}
            id={props.id}
            img={Compare}
            action={goToCompare}
          />
        )}
      </div>
    </div>
  );
};

export default Item;

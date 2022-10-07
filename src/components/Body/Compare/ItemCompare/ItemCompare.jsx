import * as React from "react";
import S from "./ItemCompare.module.scss";
import img from "../../../../assets/img/imgfor/small.png";
import generatorRandomString from "../../../../utils/GeneratorRandomString";
import MyButton from "../../../UI/MyButton/MyButton";

const ItemCompare = (props) => {
  const handel = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className={S.item}>
      <div className={S.img}>
        <img src={props.img ? props.img : img} alt="" />
      </div>
      {props.keys.map((els) => {
        return (
          <div key={generatorRandomString()} className={S.char}>
            {props.el[els] ? props.el[els] : "-"}
          </div>
        );
      })}
      <div className={S.action}>
        <div className={S.widthMax}>
          <MyButton title={"удалить"} action={handel} />
        </div>
      </div>
    </div>
  );
};

export default ItemCompare;

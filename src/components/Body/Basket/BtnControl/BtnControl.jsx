import * as React from "react";
import S from "./BtnControl.module.scss";

const BtnControl = () => {
  return (
    <div className={S.controlBtns}>
      <button className={S.btn}>Готовые к заказу</button>
      <button className={S.btn}>Отложенные</button>
      <button className={S.btnDel}>Очистить карзину</button>
    </div>
  );
};

export default BtnControl;

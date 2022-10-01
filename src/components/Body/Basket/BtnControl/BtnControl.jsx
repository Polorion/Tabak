import * as React from "react";
import S from "./BtnControl.module.scss";

const BtnControl = (props) => {
  const handler = (done) => {
    props.setDelayed(done);
  };
  return (
    <div className={S.controlBtns}>
      <button
        onClick={() => {
          handler(true);
        }}
        className={S.btn}
      >
        Готовые к заказу
      </button>
      <button
        onClick={() => {
          handler(false);
        }}
        className={S.btn}
      >
        Отложенные
      </button>
      <button className={S.btnDel}>Очистить карзину</button>
    </div>
  );
};

export default BtnControl;

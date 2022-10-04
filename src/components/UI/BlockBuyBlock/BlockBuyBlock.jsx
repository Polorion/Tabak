import * as React from "react";
import S from "./BlockBuyBlock.module.scss";
import MyButton from "../MyButton/MyButton";
import { useState } from "react";

const BlockBuyBlock = (props) => {
  const [count, setCount] = useState(1);
  const goItemToBasket = () => {
    const newObj = { ...props.el, count: count };
    props.goItemToBasket(newObj);
  };

  const upCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const downCount = () => {
    count > 0 && setCount((prevState) => prevState - 1);
  };
  return (
    <div className={S.body}>
      <div className={S.upOrDown}>
        <button onClick={downCount}>-</button>
        <div className={S.count}>{count}</div>
        <button onClick={upCount}>+</button>
        <MyButton action={goItemToBasket} title={"купить"} />
      </div>
    </div>
  );
};

export default BlockBuyBlock;

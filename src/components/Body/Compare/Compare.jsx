import * as React from "react";
import S from "./Compare.module.scss";
import PathHistory from "../../../HOC/PathHistory/PathHistory";
import ItemCompare from "./ItemCompare/ItemCompare";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";

const Compare = (props) => {
  const listIsNull = props.items.length > 0;
  return (
    <PathHistory>
      <div className={S.body}>
        {listIsNull ? (
          <h2 className={S.title}>Сравнение товаров</h2>
        ) : (
          <h1 className={S.title}> Список пуст</h1>
        )}
        <div className={S.controlBtn}>
          <div>Показаны:</div>
          <button>все характеристики</button>
          <button>только различающиеся</button>
        </div>
        <div className={S.compareBlock}>
          <div className={S.characteristics}>
            {listIsNull && <div className={S.img}> картинка</div>}
            {props.keys.map((el) => {
              return (
                <div key={GeneratorRandomString()} className={S.char}>
                  {el}
                </div>
              );
            })}
          </div>
          <div className={S.itemsBody}>
            {props.items.map((el) => {
              return (
                <ItemCompare
                  key={GeneratorRandomString()}
                  deleteItem={props.deleteItem}
                  id={el.id}
                  el={el.settings}
                  img={el.img}
                  keys={props.keys}
                />
              );
            })}
          </div>
        </div>
      </div>
    </PathHistory>
  );
};

export default Compare;

import * as React from "react";
import S from "./FindInput.module.scss";
import FindItem from "../FindItem/FindItem";
import { useEffect, useMemo, useRef, useState } from "react";
import generatorRandomString from "../../../../utils/GeneratorRandomString";

const FindInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);
  const windowHandel = (e) => {
    if (e.target !== ref.current) {
      props.setOpenWindow(false);
    }
  };
  useEffect(() => {
    props.findWindowOpen
      ? window.addEventListener("click", windowHandel)
      : window.removeEventListener("click", windowHandel);
  }, [props.findWindowOpen]);
  useEffect(() => {
    inputValue === "" && props.setOpenWindow(false);
  }, [inputValue]);

  const allItems = props.items.reduce((acc, item) => {
    return [...acc, { title: item.title, id: item.id, img: item.img }];
  }, []);
  const handelInput = (e) => {
    props.setOpenWindow(true);
    setInputValue((prev) => e.target.value);
  };
  const findItems = useMemo(() => {
    return allItems.filter((item) => {
      return item.title.toLowerCase().includes(inputValue);
    });
  }, [inputValue]);

  return (
    <div ref={ref} className={S.input}>
      <input
        type="text"
        placeholder={"поиск товаров"}
        value={inputValue}
        onInput={handelInput}
      />
      {props.findWindowOpen && (
        <ul className={S.findList}>
          {findItems.length > 0 ? (
            findItems.map((el) => {
              return (
                <FindItem
                  key={generatorRandomString()}
                  title={el.title}
                  img={el.img}
                  id={el.id}
                />
              );
            })
          ) : (
            <li className={S.none}>Ничего не найдено</li>
          )}
          {}
        </ul>
      )}
    </div>
  );
};

export default FindInput;

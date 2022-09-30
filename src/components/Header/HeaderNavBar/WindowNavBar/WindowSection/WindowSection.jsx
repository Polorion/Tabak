import * as React from "react";
import S from "./WindowSection.module.scss";
import MyButton from "../../../../UI/MyButton/MyButton";
import { NavLink } from "react-router-dom";
import GeneratorRandomString from "../../../../../utils/GeneratorRandomString";

const WindowSection = (props) => {
  const handler = () => {
    props.setOpenOrClosedWindow(false);
  };
  return (
    <div className={S.body}>
      <div onClick={handler} className={S.title}>
        <NavLink to={props.el.path}>
          {props.el.title} <span className={S.total}>{props.el.total}</span>
        </NavLink>
      </div>
      <div className={S.firma}>
        {props.el.firma?.map((el, i) => {
          if (i <= 5) {
            return (
              <div onClick={handler} key={GeneratorRandomString()}>
                <NavLink
                  to={`${props.el.path}/${el.path}`}
                  className={S.firmaItem}
                >
                  <p> {el.title}</p> <span className={S.total}>{el.total}</span>
                </NavLink>
              </div>
            );
          }
        })}
      </div>
      {props.el.firma.length > 5 && (
        <div className={S.test}>
          <MyButton title={"Показать все"} />
        </div>
      )}
    </div>
  );
};

export default WindowSection;

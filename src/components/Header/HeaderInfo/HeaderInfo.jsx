import * as React from "react";
import S from "./HeaderInfo.module.scss";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Адреса Магазинов",
    path: "adress_magazin",
  },
  {
    title: "Как заказать",
    path: "zakazat",
  },
  {
    title: "Оплата",
    path: "oplata",
  },
  {
    title: "Получение",
    path: "polyshenie",
  },
  {
    title: "Помощь",
    path: "help",
  },
  {
    title: "Гарантия и возврат",
    path: "garantia",
  },
  {
    title: "Отзовы",
    path: "otziv",
  },
  {
    title: "О компании",
    path: "compani",
  },
  {
    title: "Блог",
    path: "blog",
  },
  {
    title: "Вакансии",
    path: "vakansi",
  },
];
const HeaderInfo = () => {
  return (
    <div className={S.body}>
      <div className={`${S.bodyContainer} container`}>
        <ul className={S.list}>
          {items.map((el, i) => {
            return (
              <NavLink
                className={`${S.item} ${i === 8 && S.last}`}
                to={`${el.path}`}
              >
                {el.title}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderInfo;

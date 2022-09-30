import * as React from "react";
import S from "./HeaderContact.module.scss";

const HeaderContact = () => {
  return (
    <div className={S.body}>
      <ul className={S.list}>
        <li className={`${S.item} `}>Сантк-Петербург</li>
        <li className={`${S.item} `}>
          <a href="tel:+79118297763">+7 911 829 77 63</a>
        </li>
        <li className={`${S.item} `}>
          <a href="tel:+79118297763">+7 911 829 77 63</a>
        </li>
      </ul>
      <div className={S.time}>10:00 - 22:00</div>
      <div className={S.email}>
        <a href="mailto:noirolop@mail.ru">Noirolop@mail.ru</a>
      </div>
    </div>
  );
};

export default HeaderContact;

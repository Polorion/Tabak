import * as React from "react";
import S from "./HeaderInfo.module.scss";

const HeaderInfo = () => {
  return (
    <div className={S.body}>
      <div className={`${S.bodyContainer} container`}>
        <ul className={S.list}>
          <li className={S.item}>Адреса Магазинов</li>
          <li className={S.item}>Как заказать</li>
          <li className={S.item}>Оплата</li>
          <li className={S.item}>Получение</li>
          <li className={S.item}>Помощь</li>
          <li className={S.item}>Гарантия и возврат</li>
          <li className={S.item}>Отзовы</li>
          <li className={S.item}>О компании</li>
          <li className={`${S.item} ${S.last}`}>Блог</li>
          <li className={S.item}>Вакансии</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderInfo;

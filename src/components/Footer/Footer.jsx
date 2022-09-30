import * as React from "react";
import S from "./Footer.module.scss";
import { ReactComponent as VK } from "../../assets/img/vk.svg";
import GeneratorRandomString from "../../utils/GeneratorRandomString";

const Footer = () => {
  const list = [
    "ТАБАК",
    "ТОВАРЫ ДЛЯ КУРЕНИЯ",
    "ТРУБКИ И МУНДШТУКИ",
    "КАЛЬЯНЫ",
    "ЗАЖИГАЛКИ",
    "ЭЛЕКТРОННЫЕ ИСПАРИТЕЛИ",
    "СУВЕНИРЫ И ПРОДУКТЫ	АЛКОГОЛЬ",
  ];
  return (
    <div className={S.footer}>
      <div className={S.footerTop}>
        <div className={"container"}>
          <ul className={S.list}>
            {list.map((el, i) => {
              return (
                <li key={GeneratorRandomString()} className={S.item}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={S.footerBottom}>
        <div className={"container"}>
          <div className={S.bottomBody}>
            <div className={S.column}>
              <p>2022 © «ТАБАК»</p>
              <p>
                Цены в розничных магазинах Наша сеть могут отличаться от цен,
                указанных на сайте.
              </p>
              <p>
                *Информация, размещенная на сайте, не является публичной
                офертой.
              </p>
              <VK width={60} height={60} />
            </div>
            <div className={S.column}>
              <p>Санкт-Петербург:</p>
              <p>+7 911 829 77 63</p>
              <div className={S.email}>
                <a href="mailto:noirolop@mail.ru">Noirolop@mail.ru</a>
              </div>
            </div>
            <div className={S.column}>
              <p>
                Пользовательское соглашение Правила пользования сайтом Политика
                конфидециальности Информация о Cookies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

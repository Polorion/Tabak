import * as React from "react";
import S from "./HeaderNavBar.module.scss";
import LiNavBar from "../../UI/LiNavBar/LiNavBar";
import WindowNavBar from "./WindowNavBar/WindowNavBar";
import { useEffect, useRef, useState } from "react";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";

const navbar = [
  {
    title: "Табак",
    img: true,
    type: 0,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Тавары для Курения",
    img: false,
    type: 1,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Табаки и Мундштуки",
    img: false,
    type: 2,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Кальяны",
    img: true,
    type: 3,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Зажигалки",
    img: false,
    type: 4,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Электронные испарители",
    img: true,
    type: 5,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Сувениры и продукты",
    img: false,
    type: 6,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
  {
    title: "Алкоголь",
    img: true,
    type: 7,
    section: [
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
      {
        title: "Сигареты",
        total: 100,
        path: "sigaret",
        firma: [
          { title: "British Tabako", total: 10, path: "british_tabako" },
          { title: "Philip Moris", total: 10, path: "philip_moris" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
          { title: "Any Propizov", total: 10, path: "any" },
        ],
      },
    ],
  },
];

const HeaderNavBar = (props) => {
  const ref = useRef(null);
  const [cordinat, setCordinat] = useState(0);

  const resize = () => {
    const c = ref.current.getBoundingClientRect();
    let scrolltop = document.body.scrollTop + c.top;
    let scrollleft = document.body.scrollLeft + c.left;
    setCordinat({ scrolltop, scrollleft });
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.addEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const c = ref.current.getBoundingClientRect();
    let scrolltop = document.body.scrollTop + c.top;
    let scrollleft = document.body.scrollLeft + c.left;
    setCordinat({ scrolltop, scrollleft });
  }, [props.openWindowNavBar]);

  return (
    <div className={`${S.body} container`}>
      <ul ref={ref} className={S.list}>
        {navbar.map((el, i) => {
          return (
            <LiNavBar
              key={GeneratorRandomString()}
              title={el.title}
              img={el.img}
              type={el.type}
              section={el.section}
              setOpenOrClosedWindow={props.setOpenOrClosedWindow}
              openWindowNavBar={props.openWindowNavBar}
              cordinat={cordinat}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNavBar;

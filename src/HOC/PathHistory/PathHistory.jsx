import * as React from "react";
import S from "./PathHistory.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import GeneratorRandomString from "../../utils/GeneratorRandomString";

const PathHistory = ({ children }) => {
  const location = useLocation();
  let paths = location.pathname.split("/").filter((el) => el !== "" && el);
  let path = "";

  const reName = [
    { name: "sigaret", reName: "Сигареты" },
    { name: "basket", reName: "Карзина" },
    { name: "Compare", reName: "Сравнить" },
  ];
  paths = paths.map((el) => {
    return reName.map((elRe) => {
      if (el === elRe.name) {
        return elRe.reName;
      }
    });
  });
  const lastPath = paths[paths.length - 1];

  return (
    <div>
      <div className={S.body}>
        <div className={S.item}>
          <NavLink to={`/`}>домой</NavLink>
        </div>
        {paths.map((el) => {
          if (el === "") {
            return;
          }
          {
            path += el + "/";
          }

          if (el === lastPath) {
            return (
              <div key={GeneratorRandomString()} className={S.item}>
                <Arrow width={30} height={30} /> {el}
              </div>
            );
          }
          return (
            <div key={GeneratorRandomString()} className={S.item}>
              <Arrow width={30} height={30} />
              <NavLink to={`/${path}`}>{el}</NavLink>
            </div>
          );
        })}
      </div>
      <div paths={paths}>{children}</div>
    </div>
  );
};

export default PathHistory;

import * as React from "react";
import S from "./HistoryPath.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";
import { ReactComponent as Arrow } from "../../../../assets/img/arrow.svg";

const HistoryPath = (props) => {
  console.log(props);
  // const location = useLocation();
  // const paths = location.pathname.split("/");
  // let path = "";
  return (
    <div>qwer</div>
    // <div className={S.body}>
    //   <div className={S.item}>
    //     <NavLink key={GeneratorRandomString()} to={`/`}>
    //       домой
    //     </NavLink>
    //   </div>
    //   {paths.map((el) => {
    //     if (el === "") {
    //       return;
    //     }
    //     {
    //       path += el + "/";
    //     }
    //     return (
    //       <div className={S.item}>
    //         <Arrow />
    //         <NavLink key={GeneratorRandomString()} to={`/${path}`}>
    //           {el}
    //         </NavLink>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default HistoryPath;

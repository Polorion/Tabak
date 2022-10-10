import * as React from "react";
import logo from "../../../assets/img/18.svg";
import S from "./HeaderFind.module.scss";
import MyButton from "../../UI/MyButton/MyButton";
import HeaderBasket from "./HeaderBasket/HeaderBasket";
import FindInput from "./FindInput/FindInput";

const HeaderFind = (props) => {
  return (
    <div className={S.body}>
      <div className={S.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={S.find}>
        <select className={S.select} name="" id="">
          <option value="">все разделы</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <FindInput
          countItem={props.countItem}
          items={props.items}
          findWindowOpen={props.findWindowOpen}
          setOpenWindow={props.setOpenWindow}
        />
      </div>
      <HeaderBasket countItem={props.countItem} />
      <div className={S.btnLogin}>
        <MyButton title={"Login"} />
      </div>
    </div>
  );
};

export default HeaderFind;

import * as React from "react";
import S from "./Header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderContact from "./HeaderContact/HeaderContact";
import HeaderFind from "./HeaderFind/HeaderFind";
import HeaderNavBarContainer from "./HeaderNavBar/HeaderNavBarContainer";

const Header = () => {
  return (
    <div className={S.body}>
      <HeaderInfo />
      <div className={`${S.headerContainer} container`}>
        <HeaderContact />
        <HeaderFind />
      </div>
      <HeaderNavBarContainer />
    </div>
  );
};

export default Header;

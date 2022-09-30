import * as React from "react";
import HeaderNavBar from "./HeaderNavBar";
import { useSelector, useDispatch } from "react-redux";
import { setOpenWindowBar } from "../../../store/MainPageReduser";

const HeaderNavBarContainer = () => {
  const openWindowNavBar = useSelector((state) => {
    return state.mainPage.openWindowNavBar;
  });
  const dispatch = useDispatch();
  const openWindowToggle = (action, chapter) => {
    dispatch(setOpenWindowBar(action, chapter));
  };

  const setOpenOrClosedWindow = (done, who) => {
    openWindowToggle(done, who);
  };

  return (
    <HeaderNavBar
      setOpenOrClosedWindow={setOpenOrClosedWindow}
      openWindowNavBar={openWindowNavBar}
    />
  );
};

export default HeaderNavBarContainer;

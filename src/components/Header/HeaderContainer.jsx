import * as React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setOpenWindow } from "../../store/HeaderReduser";

const HeaderContainer = (props) => {
  const countItem = props.basketActive.length;
  const goToInfoItem = () => {};
  return (
    <Header
      countItem={countItem}
      items={props.items}
      findWindowOpen={props.findWindowOpen}
      setOpenWindow={props.setOpenWindow}
    />
  );
};

const mapDispatchToProps = (state) => {
  return {
    basketActive: state.basket.basket.basketActive,
    items: state.mainPage.sliderNewPosition,
    findWindowOpen: state.header.findWindowOpen,
  };
};
export default connect(mapDispatchToProps, { setOpenWindow })(HeaderContainer);

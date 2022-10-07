import * as React from "react";
import { connect } from "react-redux";
import GetSliderFunctionGotoBasket from "./ItemSliderContainer";

const PopularItemSlider = (props) => {
  return <GetSliderFunctionGotoBasket {...props} />;
};

const mapDispatchToProps = (state) => {
  return {
    items: state.mainPage.sliderPopularPosition,
  };
};

export default connect(mapDispatchToProps, {})(PopularItemSlider);

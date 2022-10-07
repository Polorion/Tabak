import * as React from "react";
import { connect } from "react-redux";
import GetSliderFunctionGotoBasket from "./ItemSliderContainer";

const NewItemSlider = (props) => {
  return <GetSliderFunctionGotoBasket {...props} />;
};
const mapDispatchToProps = (state) => {
  return {
    items: state.mainPage.sliderNewPosition,
  };
};

export default connect(mapDispatchToProps, {})(NewItemSlider);

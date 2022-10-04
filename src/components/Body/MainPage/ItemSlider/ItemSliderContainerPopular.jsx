import * as React from "react";
import { connect } from "react-redux";
import ItemSlider from "./ItemSlider";

const ItemSliderContainerNew = (props) => {
  return <ItemSlider title={"Популярные"} items={props.items} />;
};
const mapDispatchToProps = (state) => {
  return {
    items: state.mainPage.sliderPopularPosition,
  };
};

export default connect(mapDispatchToProps, {})(ItemSliderContainerNew);

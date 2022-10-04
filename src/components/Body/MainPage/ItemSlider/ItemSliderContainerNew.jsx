import * as React from "react";
import { connect } from "react-redux";
import ItemSlider from "./ItemSlider";
import {
  deleteItemActive,
  deleteItemDalay,
  transferFromActive,
  transferFromDelay,
  transferInBasket,
} from "../../../../store/BasketReduser";

const ItemSliderContainerNew = (props) => {
  const goItemToBasket = (obj) => {
    let test = props.itemInBasketActive.map((el) => {
      return el.id === obj.id;
    });
    test = [
      ...test,
      ...props.itemInBasketDelay.map((el) => {
        return el.id === obj.id;
      }),
    ];

    if (!test.includes(true)) {
      props.transferInBasket(obj);
    } else {
      props.deleteItemDalay(obj.id);
      props.deleteItemActive(obj.id);
      props.transferInBasket(obj);
    }
  };
  return (
    <ItemSlider
      title={"Новые"}
      items={props.items}
      goItemToBasket={goItemToBasket}
    />
  );
};
const mapDispatchToProps = (state) => {
  return {
    items: state.mainPage.sliderNewPosition,
    itemInBasketActive: state.basket.basket.basketActive,
    itemInBasketDelay: state.basket.basket.basketDelayed,
  };
};

export default connect(mapDispatchToProps, {
  transferInBasket,
  transferFromActive,
  deleteItemActive,
  deleteItemDalay,
})(ItemSliderContainerNew);

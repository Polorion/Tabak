import * as React from "react";
import { connect } from "react-redux";
import ItemSlider from "./ItemSlider";
import {
  deleteItemActive,
  deleteItemDalay,
  transferFromActive,
  transferFromCompare,
  transferFromDelay,
  transferInBasket,
} from "../../../../store/BasketReduser";
import GoToCompare from "../../../../HOC/GoToCompare/GoToCompare";

const ItemSliderContainer = (props) => {
  const goItemToBasket = (obj) => {
    let findItems = props.itemInBasketActive.map((el) => {
      return el.id === obj.id;
    });
    findItems = [
      ...findItems,
      ...props.itemInBasketDelay.map((el) => {
        return el.id === obj.id;
      }),
    ];

    if (!findItems.includes(true)) {
      props.transferInBasket(obj);
    } else {
      props.deleteItemDalay(obj.id);
      props.deleteItemActive(obj.id);
      props.transferInBasket(obj);
    }
  };
  return (
    <ItemSlider
      goItemToBasket={goItemToBasket}
      title={props.title}
      items={props.items}
      goItemToCompare={props.goItemToCompare}
    />
  );
};
const mapDispatchToProps = (state) => {
  return {
    itemInBasketActive: state.basket.basket.basketActive,
    itemInBasketDelay: state.basket.basket.basketDelayed,
  };
};

export default GoToCompare(
  connect(mapDispatchToProps, {
    transferInBasket,
    transferFromActive,
    deleteItemActive,
    deleteItemDalay,
  })(ItemSliderContainer)
);

import * as React from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import {
  deleteItem,
  SetCountItem,
  setDelayed,
  transferFromDelay,
} from "../../../store/BasketReduser";

const BasketContainer = (props) => {
  const upCount = (id, t) => {
    props.SetCountItem(id, t);
  };
  const del = (id) => {
    props.deleteItem(id);
  };

  return (
    <Basket
      basket={{
        basketActive: props.basketActive,
        basketDelayed: props.basketDelayed,
      }}
      upCount={upCount}
      del={del}
      delayed={props.delayed}
      setDelayed={props.setDelayed}
      transferFromDelay={props.transferFromDelay}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    basketActive: state.basket.basket.basketActive,
    basketDelayed: state.basket.basket.basketDelayed,
    delayed: state.basket.delayed,
  };
};

export default connect(mapStateToProps, {
  SetCountItem,
  deleteItem,
  setDelayed,
  transferFromDelay,
})(BasketContainer);

import * as React from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import {
  deleteItemActive,
  deleteItemDalay,
  SetCountItemActive,
  SetCountItemDeley,
  setDelayed,
  transferFromActive,
  transferFromDelay,
} from "../../../store/BasketReduser";
import GoToCompare from "../../../HOC/GoToCompare/GoToCompare";

const BasketContainer = (props) => {
  console.log(props, 11111111111);
  const setCountActive = (id, t) => {
    props.SetCountItemActive(id, t);
  };
  const setCountDelay = (id, t) => {
    props.SetCountItemDeley(id, t);
  };
  const delActive = (id) => {
    props.deleteItemActive(id);
  };
  const delDelay = (id) => {
    props.deleteItemDalay(id);
  };
  const transferItemFromDelay = (id) => {
    props.transferFromDelay(id);
  };
  const transferItemFromActive = (id) => {
    props.transferFromActive(id);
  };

  return (
    <Basket
      basket={{
        basketActive: props.basketActive,
        basketDelayed: props.basketDelayed,
      }}
      setCountActive={setCountActive}
      setCountDelay={setCountDelay}
      delActive={delActive}
      delDelay={delDelay}
      delayed={props.delayed}
      setDelayed={props.setDelayed}
      transferFromDelay={props.transferFromDelay}
      transferItemFromDelay={transferItemFromDelay}
      transferItemFromActive={transferItemFromActive}
      goToCompare={props.goItemToCompare}
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

export default GoToCompare(
  connect(mapStateToProps, {
    SetCountItemActive,
    deleteItemDalay,
    SetCountItemDeley,
    transferFromActive,
    deleteItemActive,
    setDelayed,
    transferFromDelay,
  })(BasketContainer)
);

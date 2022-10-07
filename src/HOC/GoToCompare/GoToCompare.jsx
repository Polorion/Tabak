import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { transferFromCompare } from "../../store/BasketReduser";

const GoToCompare = (Component) => {
  const NewComponent = (props) => {
    const dispatch = useDispatch();
    const compare = useSelector((state) => state.basket.compare);
    const goItemToCompare = (obj) => {
      if (!compare.includes(obj)) {
        dispatch(transferFromCompare(obj));
      }
    };

    return <Component {...props} goItemToCompare={goItemToCompare} />;
  };
  return NewComponent;
};

export default GoToCompare;

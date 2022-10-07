import * as React from "react";
import Compare from "./Compare";
import { connect } from "react-redux";
import { deleteInCompare } from "../../../store/BasketReduser";

const CompareContainer = (props) => {
  console.log(props.compareItems);
  const keys = props.compareItems.reduce(
    (acc, item) => [...acc, ...Object.keys(item.settings)],
    []
  );
  const makeUniq = (arr) => [...new Set(arr)];
  const uniqKeys = makeUniq(keys);

  const deleteItem = (id) => {
    props.deleteInCompare(id);
  };
  return (
    <Compare
      items={props.compareItems}
      keys={uniqKeys}
      deleteItem={deleteItem}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    compareItems: state.basket.compare,
  };
};

export default connect(mapStateToProps, { deleteInCompare })(CompareContainer);

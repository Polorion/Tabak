import * as React from "react";
import S from "./Catalog.module.scss";
import HistoryPath from "./HistoryPath/HistoryPath";
import PathHistory from "../../../HOC/PathHistory/PathHistory";

const Catalog = () => {
  return (
    <div>
      <PathHistory>
        <HistoryPath />
      </PathHistory>
    </div>
  );
};

export default Catalog;

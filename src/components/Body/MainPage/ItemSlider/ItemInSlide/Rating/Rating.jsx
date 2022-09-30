import * as React from "react";
import S from "./Rating.module.scss";
import { ReactComponent as Star } from "../../../../../../assets/img/stars.svg";
import GeneratorRandomString from "../../../../../../utils/GeneratorRandomString";

const Rating = (props) => {
  let raring = [];
  for (let i = 0; i < 5; i++) {
    if (i <= props.rating) {
      raring.push({
        starRed: true,
      });
    } else {
      raring.push({
        starRed: false,
      });
    }
  }
  return (
    <div className={S.body}>
      {raring.map((el, i) => {
        return (
          <div
            key={GeneratorRandomString()}
            className={`${el.starRed && S.red} ${S.star}`}
          >
            <Star width={"20"} height={"20"} />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;

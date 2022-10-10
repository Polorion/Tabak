import * as React from "react";
import S from "./FindItem.module.scss";
import { NavLink } from "react-router-dom";

const FindItem = (props) => {
  return (
    <NavLink to={`info/id:${props.id}`}>
      <li
        className={S.body}
        onClick={() => {
          props.closed(false);
        }}
      >
        <div className={S.img}>
          <img src={props.img} alt="" />
        </div>
        <div className={S.title}>{props.title}</div>
      </li>
    </NavLink>
  );
};

export default FindItem;

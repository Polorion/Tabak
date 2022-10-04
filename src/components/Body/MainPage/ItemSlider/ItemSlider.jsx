import * as React from "react";
import S from "./ItemSlider.module.scss";
import SimpleSlider from "../../../UI/Slider/Slider";
import "./ItemSlided.scss";
import ItemInSlide from "./ItemInSlide/ItemInSlide";

const ItemSlider = (props) => {
  return (
    <div className={`${S.body} test`}>
      <h2 className={S.title}>{props.title}</h2>
      <SimpleSlider
        dots={false}
        arrows={true}
        dotsClass={"mainDots"}
        watch={5}
        auto={false}
      >
        {props.items.map((el) => {
          return (
            <ItemInSlide
              el={el}
              key={el.id}
              goItemToBasket={props.goItemToBasket}
            />
          );
        })}
      </SimpleSlider>
    </div>
  );
};

export default ItemSlider;

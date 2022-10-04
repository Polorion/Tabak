import "./Slider.scss";
import * as React from "react";
import S from "./BodySlider.module.scss";
import IMG0 from "../../../../assets/img/imgfor/big.jfif";
import IMG1 from "../../../../assets/img/imgfor/big.jfif";
import IMG2 from "../../../../assets/img/imgfor/big.jfif";
import IMG3 from "../../../../assets/img/imgfor/big.jfif";
import Slide from "./Slide/Slide";
import SimpleSlider from "../../../UI/Slider/Slider";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";

const BodySlider = () => {
  const slide = [IMG0, IMG1, IMG2, IMG3];
  return (
    <div className={`${S.sliderBody} sliderBig`}>
      <SimpleSlider
        dots={true}
        arrow={true}
        dotsClass={"mainDots"}
        watch={1}
        auto={true}
      >
        {slide.map((el, i) => {
          return <Slide key={GeneratorRandomString()} img={el} />;
        })}
      </SimpleSlider>
    </div>
  );
};

export default BodySlider;

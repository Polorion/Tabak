import "./Slider.scss";
import * as React from "react";
import S from "./BodySlider.module.scss";
import IMG0 from "../../../../assets/img/sliderIMG/sigar.jpg";
import IMG1 from "../../../../assets/img/sliderIMG/sigas.jpg";
import IMG2 from "../../../../assets/img/sliderIMG/moreSigas.jpg";
import IMG3 from "../../../../assets/img/sliderIMG/tabak.jpg";
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

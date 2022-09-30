import * as React from "react";
import S from "./ReviewsSlider.module.scss";
import "./ReviewsSlider.scss";
import img from "../../../../assets/img/sliderIMG/sigas.jpg";
import SimpleSlider from "../../../UI/Slider/Slider";
import ReviewsSlide from "./ReviewsSlide/ReviewsSlide";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";

const ReviewsSlider = (props) => {
  const slide = [
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 13231,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 11233,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 133,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 1213,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 152,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 15,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 11,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 14,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 13,
    },
    {
      info: "Сеточки д/трубок 17 мм ST17",
      img: img,
      stars: 2,
      price: 34,
      id: 12,
    },
  ];
  return (
    <div className={`${S.body}`}>
      <h2 className={S.title}>{props.title}</h2>
      <SimpleSlider
        dots={false}
        arrows={true}
        dotsClass={"mainDots"}
        watch={2}
        auto={false}
      >
        {slide.map((el, i) => {
          return <ReviewsSlide key={GeneratorRandomString()} img={el.img} />;
        })}
      </SimpleSlider>
    </div>
  );
};

export default ReviewsSlider;

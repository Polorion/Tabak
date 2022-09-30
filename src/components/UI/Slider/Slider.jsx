import React from "react";
import Slider from "react-slick";
import MyButton from "../MyButton/MyButton";
import MyButtonRevers from "../MyButtonRevers/MyButtonRevers";

const SimpleSlider = ({ children, ...props }) => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: `50%`,
          right: "0px",
        }}
      >
        <MyButton action={onClick} title={"Дальше"} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: `50%`,
          left: "0px",
        }}
      >
        <MyButtonRevers action={onClick} title={"Назад"} />
      </div>
    );
  }
  var settings = {
    autoplay: props.auto,
    dotsClass: props.dotsClass,
    dots: props.dots,
    arrows: props.arrows,
    infinite: true,
    speed: 500,
    slidesToShow: props.watch,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    gap: "60px",
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;

import * as React from "react";
import S from "./Manufacturers.module.scss";
import img from "../../../../assets/img/imgfor/small.png";
import SimpleSlider from "../../../UI/Slider/Slider";
import ManufacturersSlide from "./ManufacturersSlide/ManufacturersSlide";

const Manufacturers = (props) => {
  const slide = [
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 13231,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 11233,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 133,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 1213,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 152,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 15,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 11,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 14,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 13,
    },
    {
      info: "lorem  ",
      img: img,
      stars: 2,
      price: 34,
      id: 12,
    },
  ];
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
        {slide.map((el) => {
          return (
            <ManufacturersSlide
              key={el.id}
              img={el.img}
              stars={el.stars}
              price={el.price}
              info={el.info}
            />
          );
        })}
      </SimpleSlider>
    </div>
  );
};

export default Manufacturers;

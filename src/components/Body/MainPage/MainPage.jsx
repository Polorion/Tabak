import * as React from "react";
import S from "./MainPage.module.scss";
import BodySlider from "./BodySlider/BodySlider";
import ReviewsSlider from "./ReviewsSlider/ReviewsSlider";
import Manufacturers from "./ManufacturersSlider/Manufacturers";
import ItemSliderContainerPopular from "./ItemSlider/ItemSliderContainerPopular";
import ItemSliderContainerNew from "./ItemSlider/ItemSliderContainerNew";

const MainPage = (props) => {
  return (
    <div className={S.body}>
      <BodySlider />
      <div className={S.slidersItems}></div>
      <div className={`${S.content} `}>
        <ItemSliderContainerNew />
        <ItemSliderContainerPopular />
        <ReviewsSlider title={"Отзовы"} />
        <Manufacturers title={"Производители"} />
      </div>
    </div>
  );
};

export default MainPage;

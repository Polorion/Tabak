import * as React from "react";
import S from "./MainPage.module.scss";
import BodySlider from "./BodySlider/BodySlider";
import ItemSlider from "./ItemSlider/ItemSlider";
import ReviewsSlider from "./ReviewsSlider/ReviewsSlider";
import Manufacturers from "./ManufacturersSlider/Manufacturers";

const MainPage = () => {
  return (
    <div className={S.body}>
      <BodySlider />
      <div className={S.slidersItems}></div>
      <div className={`${S.content} `}>
        <ItemSlider title={"Новые"} />
        <ItemSlider title={"Популярные"} />
        <ReviewsSlider title={"Отзовы"} />
        <Manufacturers title={"Производители"} />
      </div>
    </div>
  );
};

export default MainPage;

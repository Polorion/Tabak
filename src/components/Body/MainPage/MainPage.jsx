import * as React from "react";
import S from "./MainPage.module.scss";
import BodySlider from "./BodySlider/BodySlider";
import ReviewsSlider from "./ReviewsSlider/ReviewsSlider";
import Manufacturers from "./ManufacturersSlider/Manufacturers";
import PopularItemSlider from "./ItemSlider/PopularItemSlider";
import NewItemSlider from "./ItemSlider/NewItemSlider";

const MainPage = (props) => {
  return (
    <div className={S.body}>
      <BodySlider />
      <div className={S.slidersItems}></div>
      <div className={`${S.content} `}>
        <NewItemSlider title={"New"} />
        <PopularItemSlider title={"Популярное"} />
        <ReviewsSlider title={"Отзовы"} />
        <Manufacturers title={"Производители"} />
      </div>
    </div>
  );
};

export default MainPage;

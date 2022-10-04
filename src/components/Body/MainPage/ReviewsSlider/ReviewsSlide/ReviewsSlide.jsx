import * as React from "react";
import S from "./ReviewsSlide.module.scss";
import Rating from "../../ItemSlider/ItemInSlide/Rating/Rating";
import MyButton from "../../../../UI/MyButton/MyButton";

const ReviewsSlide = (props) => {
  return (
    <div className={S.body}>
      <div className={S.infoItem}>Lorem ipsum dolor sit.</div>
      <div className={S.rewiewsBody}>
        <div className={S.rewiewsImg}>
          <img src={props.img} alt="" />
          <Rating rating={3} />
        </div>
        <div className={S.rewiewsinfo}>
          <div className={S.who}>
            Отзыв разместил:{" "}
            <span className={S.bold}>Lorem ipsum dolor sit</span>.
          </div>
          <div className={S.when}>
            Отзыв добавлен:
            <span className={S.bold}> Lorem ipsum dolor sit</span>.
          </div>
          <div className={S.exp}>
            <span className={S.bold}>Опыт Использования</span>: Lorem ipsum
            dolor sit.
          </div>
          <div className={S.dignity}>
            {" "}
            <span className={S.bold}>Достоинства</span>: Lorem ipsum dolor sit.
          </div>
          <div className={S.flaw}>
            {" "}
            <span className={S.bold}>Недостатки</span>: Lorem ipsum dolor sit.
          </div>
          <div className={S.impressoins}>
            <span className={S.bold}>Общие впечатления</span>: Lorem ipsum dolor
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            enim libero placeat vitae. Alias beatae, dicta dolores, eaque earum
            eius, ex facilis incidunt iste nesciunt quia repellat ullam
            voluptatem! A ad animi aperiam architecto asperiores atque, dolor
            excepturi exercitationem illo in, iure laudantium maiores minus
            neque, quia recusandae rerum unde velit! Accusamus amet atque beatae
            consectetur consequuntur dicta dolor dolorem enim facilis, illo iure
            odit quam quibusdam, quisquam quo recusandae, vel vero? Ad, alias
            amet assumenda delectus dolores eum eveniet ex ipsam iusto labore
            laboriosam magni minus necessitatibus nobis odio perspiciatis
            placeat quidem reiciendis repudiandae sed unde voluptate voluptates
            voluptatum. sit.
          </div>
        </div>
      </div>
      <div className={S.btn}>
        <MyButton title={"Читать подробнее"} />
      </div>
    </div>
  );
};

export default ReviewsSlide;

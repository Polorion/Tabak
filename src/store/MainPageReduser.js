import img from "../assets/img/imgfor/small.png";

const SET_OPEN_WINDOW_BAR = "SET_OPEN_WINDOW_BAR";

export const setOpenWindowBar = (boolean, chapter) => {
  return {
    type: SET_OPEN_WINDOW_BAR,
    boolean: boolean,
    chapter: chapter,
  };
};

const initialState = {
  openWindowNavBar: false,
  sliderNewPosition: [
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 2,
      count: 1,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 3,
      count: 3,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 4,
      count: 4,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 5,
      count: 1,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 7,
      count: 5,
    },
  ],
  sliderPopularPosition: [
    {
      title: "popular",
      img: img,
      stars: 2,
      price: 34,
      article: "lorem",
      id: 321,
      count: 1,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 12,
      count: 3,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 123,
      count: 4,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 3,
      count: 1,
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 1112,
      count: 5,
    },
  ],
};

const MainPageReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_WINDOW_BAR:
      return {
        ...state,
        openWindowNavBar: action.boolean,
      };
    default:
      return { ...state };
  }
};

export default MainPageReduser;

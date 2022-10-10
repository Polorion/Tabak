import img from "../assets/img/sliderIMG/sigas.jpg";

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
      title: "qqwq",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 2,
      count: 1,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "qqq",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 3,
      count: 3,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "eee",
      article: "lorem",
      img: img,
      stars: 2,

      price: 34,
      id: 4,
      count: 4,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "rrr",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 5,
      count: 1,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "ttt",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 7,
      count: 5,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
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
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 12,
      count: 3,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 123,
      count: 4,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 3,
      count: 1,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
    },
    {
      title: "popular",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 1112,
      count: 5,
      settings: {
        test: 1234,
        ttest: 1234,
        tttest: 1234,
      },
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

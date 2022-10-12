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
      title: "qqwq",
      article: "lorem",
      img: img,
      stars: 2,
      price: 34,
      id: 2,
      count: 1,
      settings: {
        tesqwet: 1234,
        ttttest: 1234,
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
        teweqst: 1234,
        ttest: 1234,
        ttteeest: 1234,
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
        tewtest: 1234,
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
        teweqst: 1234,
        ttest: 1234,
        tttwqqeest: 1234,
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
        tewwest: 1234,
        ttest: 1234,
        ttteeqst: 1234,
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
        tessst: 1234,
        tteqewst: 1234,
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
        testtt: 1234,
        ttesttt: 1234,
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
        testst: 1234,
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
        tttessttt: 1234,
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
        tesssest: 1234,
        ttest: 1234,
        tttaaaest: 1234,
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

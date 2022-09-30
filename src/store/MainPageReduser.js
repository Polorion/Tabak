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

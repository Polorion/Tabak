const SET_OPEN_WINDOW_FIND = "SET_OPEN_WINDOW_FIND";
export const setOpenWindow = (done) => {
  return {
    type: SET_OPEN_WINDOW_FIND,
    done,
  };
};

const initialState = {
  findWindowOpen: false,
};

const HeaderReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_WINDOW_FIND:
      return { ...state, findWindowOpen: action.done };
    default:
      return { ...state };
  }
};

export default HeaderReduser;

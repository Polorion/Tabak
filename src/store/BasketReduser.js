const UP_COUNT = "UP_COUNT";
const DELETE_ITEM = "DELETE_ITEM";
const SET_DELAYED = "SET_DELAYED";
const TRANSFER_FROM_ACTIVE = "TRANSFER_FROM_ACTIVE";
const TRANSFER_FROM_DELAY = "TRANSFER_FROM_DELAY";

export const transferFromActive = (id) => {
  return {
    type: TRANSFER_FROM_ACTIVE,
    id,
  };
};
export const transferFromDelay = (id) => {
  return {
    type: TRANSFER_FROM_DELAY,
    id,
  };
};

export const setDelayed = (done) => {
  return {
    type: SET_DELAYED,
    done,
  };
};

export const SetCountItem = (id, move) => {
  return {
    type: UP_COUNT,
    id,
    move,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

const initialState = {
  delayed: true,
  basket: {
    basketActive: [
      {
        title: "Фильтры сигаретные Cartel Slim Long 6/22 100",
        article: " OP200001843",
        price: "40",
        count: 10,
        id: 1,
      },
      {
        title: "Lorem lorem dsadsasda",
        article: " 1937820",
        price: "428",
        count: 10,
        id: 2,
      },
    ],
    basketDelayed: [
      {
        title: "dsadsdsa",
        article: " OP200001843",
        price: "40",
        count: 10,
        id: 1,
      },
      {
        title: "dasdsa",
        article: " 1937820",
        price: "428",
        count: 10,
        id: 2,
      },
    ],
  },
};

const BasketReduser = (state = initialState, action) => {
  switch (action.type) {
    case UP_COUNT:
      return {
        ...state,
        basket: [
          ...state.basket.map((el) => {
            if (el.id === action.id) {
              if (action.move === "up") {
                return { ...el, count: el.count + 1 };
              } else {
                return { ...el, count: el.count - 1 };
              }
            }
            return el;
          }),
        ],
      };
    case TRANSFER_FROM_DELAY:
      const findItem = state.basket.basketActive.map(
        (el) => el.id === action.id
      );
      return {
        ...state,
        basket: {
          ...state.basket,
          basketActive: [
            ...state.basket.basketActive.filter((el) => {
              return el.id !== action.id;
            }),
          ],
        },
      };
      return;
    case SET_DELAYED:
      return { ...state, delayed: action.done };
    case DELETE_ITEM:
      return {
        ...state,
        basket: [
          ...state.basket.filter((el) => {
            return el.id !== action.id;
          }),
        ],
      };
    default:
      return { ...state };
  }
};

export default BasketReduser;

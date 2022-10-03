const UP_COUNT_ACTION = "UP_COUNT_ACTION";
const UP_COUNT_DELAY = "UP_COUNT_DELAY";
const DELETE_ITEM_ACTIVE = "DELETE_ITEM_ACTIVE";
const DELETE_ITEM_DELAY = "DELETE_ITEM_DELAY";
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

export const SetCountItemActive = (id, move) => {
  return {
    type: UP_COUNT_ACTION,
    id,
    move,
  };
};export const SetCountItemDeley = (id, move) => {
  return {
    type: UP_COUNT_DELAY,
    id,
    move,
  };
};

export const deleteItemActive = (id) => {
  return {
    type: DELETE_ITEM_ACTIVE,
    id,
  };
};
export const deleteItemDalay = (id) => {
  return {
    type: DELETE_ITEM_DELAY,
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
        id: 3,
      },
      {
        title: "dasdsa",
        article: " 1937820",
        price: "428",
        count: 10,
        id: 4,
      },
    ],
  },
};

const BasketReduser = (state = initialState, action) => {
  switch (action.type) {
    case UP_COUNT_ACTION:
      return {
        ...state,
        basket:{...state.basket,
          basketActive:[
            ...state.basket.basketActive.map((el) => {
              if (el.id === action.id) {
                if (action.move === "up") {
                  return { ...el, count: el.count + 1 };
                } else {
                  return { ...el, count: el.count - 1 };
                }
              }
              return el;
            }),
          ],}
      };
      case UP_COUNT_DELAY:
      return {
        ...state,
        basket:{...state.basket,
          basketDelayed:[
            ...state.basket.basketDelayed.map((el) => {
              if (el.id === action.id) {
                if (action.move === "up") {
                  return { ...el, count: el.count + 1 };
                } else {
                  return { ...el, count: el.count - 1 };
                }
              }
              return el;
            }),
          ],}
      };
    case TRANSFER_FROM_DELAY:
      const findItemActive = state.basket.basketActive.filter(
        (el) => el.id === action.id
      );
console.log(findItemActive)
      return {
        ...state,
        basket: {
          ...state.basket,
          basketDelayed: [

            ...state.basket.basketDelayed,...findItemActive
          ],
          basketActive: [
            ...state.basket.basketActive.filter(el=>{
              return el.id!==action.id
            })
          ]
        },
      };
      case TRANSFER_FROM_ACTIVE:
      const findItemDelay = state.basket.basketDelayed.filter(
        (el) => el.id === action.id

      );
      return {
        ...state,
        basket: {
          ...state.basket,
          basketDelayed: [
            ...state.basket.basketDelayed.filter(el=>{
              return el.id!==action.id
            })
          ],
          basketActive: [
            ...state.basket.basketActive,...findItemDelay

          ]
        },
      };
    case SET_DELAYED:
      return { ...state, delayed: action.done };
    case DELETE_ITEM_ACTIVE:
      return {
        ...state,
        basket:{...state.basket,
          basketActive: [
            ...state.basket.basketActive.filter((el) => {
              return el.id !== action.id;
            }),
          ],}
      };
      case DELETE_ITEM_DELAY:
      return {
        ...state,
        basket:{...state.basket,
          basketDelayed: [
            ...state.basket.basketDelayed.filter((el) => {
              return el.id !== action.id;
            }),
          ],}
      };
    default:
      return { ...state };
  }
};

export default BasketReduser;



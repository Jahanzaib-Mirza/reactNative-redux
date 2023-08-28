const {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_Data} = require('./constants');

const inital = [];

const reducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      let filteredArray = state.filter(e => e !== action.data);
      return [...filteredArray];
    case SET_USER_Data:
    return[...state,action.data]
    default:
      return state;
  }
};

export {reducer};

/* eslint-disable consistent-return */
import * as types from '../constants/actionTypes';

const initialState = {
  items: [],
  user: {
    name: '',
    email: ''
  },
  cards: [],
  modalStatus: false,
  loggedIn: false
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return;
    case types.SEARCH:
      return;
    case types.GET_ALL_ITEMS:
      return;
    default:
      return state;
  }
};

export default cardsReducer;

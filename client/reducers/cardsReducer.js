/* eslint-disable consistent-return */
import * as types from '../constants/actionTypes';

const initialState = {
  items: [{ id: null, item_name: null, item_price: 0, item_photo: null, item_details: null }],
  user: {
    name: '',
    email: ''
  },
  cards: [],
  modalStatus: false,
  loggedIn: false,
  fetching: false,
  fetched: false
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state
      };
    case types.SEARCH:
      return {
        ...state
      };
    case types.GET_ALL_ITEMS_START:
      return {
        ...state,
        fetching: true
      };
    case types.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
        fetching: false,
        fetched: true
      };
    default:
      return state;
  }
};

export default cardsReducer;

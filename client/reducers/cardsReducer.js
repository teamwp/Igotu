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
  loggedIn: false,
  fetching: false,
  fetched: false,
  searchBoxValue: 'search'
};

const cardsReducer = (state = initialState, action) => {
  console.log('running reducer:', action.type);
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
        fetching: true,
        fetched: false
      };
    case types.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
        fetching: false,
        fetched: true
      };
    case types.SEARCH_BOX_CHANGE:
      return {
        ...state,
        searchBoxValue: action.payload
      };

    default:
      return state;
  }
};

export default cardsReducer;

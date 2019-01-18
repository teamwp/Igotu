import * as types from '../constants/actionTypes';

export const getAllItemsStart = () => ({
  type: types.GET_ALL_ITEMS_START,
  fetching: true
});

export const getAllItems = resp => ({
  type: types.GET_ALL_ITEMS,
  fetching: false,
  fetched: true,
  payload: resp
});

export const getAllItemsErr = err => ({
  type: types.GET_ALL_ITEMS_ERR,
  fetching: false,
  payload: err
});

// export const searchStart = query => ({
//   type: types.SEARCH,
//   payload: query
// });

// export const login = data => ({
//   type: types.LOGIN,
//   payload: data
// });

import * as types from '../constants/actionTypes';

export const getAllItems = () => ({
  type: types.GET_ALL_ITEMS
});

export const search = query => ({
  type: types.SEARCH,
  payload: query
});

export const login = data => ({
  type: types.LOGIN,
  payload: data
});

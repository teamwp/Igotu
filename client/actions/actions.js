import * as types from '../constants/actionTypes';

export const fetchItemsStart = () => ({
  type: types.GET_ALL_ITEMS_START
});

export const fetchedItems = resp => ({
  type: types.GET_ALL_ITEMS,
  payload: resp
});

export const fetchError = err => ({
  type: types.GET_ALL_ITEMS_ERR,
  payload: err
});

export const fetchItemsData = () => dispatch => {
  dispatch(fetchItemsStart());

  fetch('http://localhost:3000/allItems')
    .then(response => response.json())
    .then(data => {
      console.log('we got the items')
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

// export const searchStart = query => ({
//   type: types.SEARCH,
//   payload: query
// });

// export const login = data => ({
//   type: types.LOGIN,
//   payload: data
// });

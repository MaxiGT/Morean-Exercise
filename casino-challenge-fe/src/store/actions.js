import * as types from '../constants/actionTypes';
import { URLS, METHOD } from '../constants/endpoints';

const usersRequest = () => ({ type: types.USER_REQUEST });
const usersRequestSuccess = (user, type) => ({
  type: type,
  payload: user,
});

export const getUsers = () => (dispatch) => {
  dispatch(usersRequest());
  return fetch(URLS.GET_USERS)
    .then(res => res.json())
    .then(data => dispatch(usersRequestSuccess(data, types.GET_USER_SUCCESS)))
    .then(error => dispatch(raiseError(error)));
}

export const updateUser = (user) => (dispatch) => {
  dispatch(usersRequest());
  return fetch(URLS.UPDATE_USER + user.id, {
    method: METHOD.POST,
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => dispatch(usersRequestSuccess(data, types.UPDATE_USER_SUCCESS)))
  .then(error => dispatch(raiseError(error)));
}

export const createUser = (user) => (dispatch) => {
  dispatch(usersRequest());
  return fetch(URLS.POST_USER, {
    method: METHOD.POST,
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(data => dispatch(usersRequestSuccess(data, types.INSERT_USER_SUCCESS)))
  .then(error => dispatch(raiseError(error)));
}

export const raiseError = (error) => ({
  type: types.RAISE_ERROR,
  payload: error
});

export const selectUser = (id) => ({
  type: types.SELECT_USER,
  payload: id,
});

export const changeOrder = (field, order, sort) => ({
  type: types.CHANGE_ORDER,
  payload: { field, order, sort },
});

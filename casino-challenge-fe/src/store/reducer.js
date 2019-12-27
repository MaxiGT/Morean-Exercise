import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  let newUsers;

  switch(action.type) {
    case types.USER_REQUEST:
      return { ...state, fetching: true };
    case types.GET_USER_SUCCESS:
      return { ...state, users: action.payload };
    case types.INSERT_USER_SUCCESS:
      return { ...state, users: action.payload };
    case types.UPDATE_USER_SUCCESS:
      newUsers = state.users.map((u) => {
        if (u.id === action.payload.id) return action.payload;
        return u;
      })
      return { ...state, users: newUsers, selectedUser: action.payload };
    case types.CHANGE_ORDER:
      return { ...state, order: action.payload };
    case types.SELECT_USER:
      return { ...state, selectedUser: state.users.filter((u) => u.id === action.payload)[0] || {} };
    default:
      return { ...state };
  }
}
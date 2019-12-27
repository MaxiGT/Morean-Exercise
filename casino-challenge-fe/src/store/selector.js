import { createSelector } from 'reselect';

const getUsers = state => state.app.users;
const getOrder = state => state.app.order;

export const getOrderedUsers = createSelector(
  [getUsers, getOrder],
  (users, order) => {
    return users.sort((a, b) => {
      return order.sort(a[order.field], b[order.field], order.order);
    });
  }
);
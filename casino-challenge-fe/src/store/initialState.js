import { noop } from 'lodash';

const initialState = {
  users: [],
  error: null,
  fetching: false,
  selectedUser: {},
  order: {
    field: '',
    order: '',
    sort: noop,
  },
};

export default initialState;
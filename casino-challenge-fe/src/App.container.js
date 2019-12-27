import AppRouter from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { raiseError,
  getUsers,
  updateUser,
  createUser,
  selectUser,
  changeOrder } from './store/actions';
import { getOrderedUsers } from './store/selector';

const mapStateToProps = (state) => {
	return {
		users: getOrderedUsers(state),
		// filter: state.app.filter,
		fetching: state.app.fetching,
    error: state.app.error,
    selectedUser: state.app.selectedUser,
    order: state.app.order,
	};
}

const dispatchActionsToProps = dispatch => {
  return bindActionCreators(
    {
      raiseError,
      getUsers,
      updateUser,
      createUser,
      selectUser,
      changeOrder,
		},
		dispatch
  );
}

export default withRouter(connect(mapStateToProps, dispatchActionsToProps)(AppRouter));
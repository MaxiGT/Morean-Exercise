import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import ErrorBoundary from './shared/Components/ErrorBoundary/ErrorBoundary'
import List from './shared/Components/List/List';
// import Question from './shared/Components/Question/Question.container';
import Guard from './shared/auth/guard';
import UserForm from './shared/Components/User/UserForm/userForm';
import './index.css';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    const { fetching, error, filter } = this.props;
    this.state = {
      fetching,
      error,
      filter,
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componentWillReceiveProps(props) {
    const { users } = props;
    if (_.isEqual(users, this.state.users)) return null;
    this.setState({ users });
  }

  render() {

    const { users, changeOrder, order, selectUser, createUser, updateUser, selectedUser } = this.props;
    
    const list = () => <List users={users} setOrder={changeOrder} currentOrder={order} setSelectedUser={selectUser} />;
    const userDetailForm = () => <UserForm selectedUser={selectedUser} submit={updateUser} recoveryUser={selectUser}/>;
    const userForm = () => <UserForm selectedUser={selectedUser} submit={createUser} recoveryUser={selectUser}/>;

    return (
      <React.Fragment>
        <ErrorBoundary error={this.state.error} raiseError={this.props.raiseError}>
            <div className="App">
              <Switch>
                <Route exact path="/" component={list} />
                <Route exact path="/user/:userId" component={userDetailForm} />
                <Guard path="/new-user"
                  component={userForm}
                  isAuthenticated={true} />
              </Switch>
            </div>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default AppRouter;

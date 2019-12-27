import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import './userForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    const { selectedUser } = this.props;
    this.state = { ...selectedUser };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (!this.props.selectedUser && parseInt(params.userId) > 0) {
      this.props.recoveryUser(params.userId);
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit = () => {
    this.props.submit(this.state);
    this.handleCancel();
  }

  handleCancel = () => {
    this.props.history.push('/');
  }

  validateForm = () => (this.state.name && this.state.name.length > 0 &&
    this.state.lastName && this.state.lastName.length > 0 &&
    this.state.winnings && this.state.winnings >= 0 &&
    this.state.country && this.state.country.length > 0) || false;

  render() {
    const isDisabled = this.validateForm();
    const { match: { params } } = this.props;
    const isEdit = !!params.userId;
    return(
      <div className='col-6'>
        <Input id={0}
          name={'name'}
          handleChange={this.handleChange}
          placeholder={'Name'}
          label={'Name'}
          value={this.state.name} />
        <Input id={1}
          name={'lastName'}
          handleChange={this.handleChange}
          placeholder={'Last Name'}
          label={'Last Name'}
          value={this.state.lastName} />
        <Input id={2}
          name={'winnings'}
          handleChange={this.handleChange}
          placeholder={'Winnings'}
          label={'Winnings'}
          type={'number'}
          value={this.state.winnings} />
        <Input id={3}
          name={'country'}
          handleChange={this.handleChange}
          placeholder={'Country'}
          label={'Country'}
          value={this.state.country} />
        <div style={{ float: 'right', marginTop: '10px' }}>
          <Button onClick={this.handleSubmit}
            label={isEdit ? 'Update' : 'Save'}
            className={'primary'}
            disabled={!isEdit && !isDisabled} />
          <Button onClick={this.handleCancel}
            label={'Cancel'}
            className={'default'} />
        </div>
      </div>
    );
  }
}

export default withRouter(UserForm);
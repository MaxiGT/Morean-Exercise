import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { noop } from 'lodash';
import { wrap } from 'module';
import List from './List'

const users = [
  {
      id: 1,
      photo: '',
      name: 'Celeste',
      lastName: 'Cide',
      country: 'USA',
      flag: '',
      winnings: 25000000.00,
  },
  {
      id: 2,
      photo: '',
      name: 'Pedro',
      lastName: 'Pomposo',
      country: 'GBR',
      flag: '',
      winnings: 10000000.00,
  },
];
const mockSetOrder = spy();
const mockSetSelectedUser = spy();
const order = {
  field: 'name',
  order: 'ASC',
  sort: noop,
}

const wrapper = shallow(<List users={users}
  setOrder={mockSetOrder}
  currentOrder={order}
  setSelectedUser={mockSetSelectedUser} />);

describe('<List />', () => {

  it('Should render properly', () => {
    expect(wrapper.find('.gridHeader').length).toEqual(1);
    expect(wrapper.find('.headerCell').length).toEqual(3);
    expect(wrapper.find('.row').length).toEqual(2);
    expect(wrapper.find('Card').length).toEqual(users.length);
  });

  it('Should react to onClicks', () => {
    const header = wrapper.find('.headerCell').at(0);
    header.simulate('click');
    expect(mockSetOrder.called).toBe(true);
  });

  it('Should react to onClicks', () => {
    const card = wrapper.find('.cardContainer').at(0);
    card.simulate('click');
    expect(mockSetSelectedUser.called).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
  user: {
    id: 1,
    name: 'Random Name 01',
    lastName: 'Random LastName 01',
  }
};

describe('Card', () => {

  it('Renders correctly with the correct props', () => {

    const card = shallow(<Card {...props} />);
    const link = card.find('Link');

    expect(link.length).toEqual(1);
    expect(link.props().to).toEqual('/user/' + props.user.id);
    expect(card.instance().props.user).toEqual(props.user);
  });

});
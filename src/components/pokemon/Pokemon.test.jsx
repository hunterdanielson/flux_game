import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

describe('Pokemon component', () => {
  it('renders Pokemon', () => {
    const wrapper = shallow(<Pokemon image='http://placeholder.png'/>);
    expect(wrapper).toMatchSnapshot();
  });
});

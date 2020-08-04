import React from 'react';
import { shallow } from 'enzyme';
import Stats from './Stats';

describe('Stats component', () => {
  it('renders Stats', () => {
    const wrapper = shallow(<Stats health={100} attack={10} defense={10} />);
    expect(wrapper).toMatchSnapshot();
  });
});

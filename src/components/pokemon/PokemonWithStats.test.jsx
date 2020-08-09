import React from 'react';
import { shallow } from 'enzyme';
import PokemonWithStats from './PokemonWithStats';

describe('Pokemon component', () => {
  it('renders Pokemon', () => {
    const pokemon = {
      image: 'http://someimg.png',
      health: 100,
      attack: 10,
      defense: 10
    };
    const wrapper = shallow(<PokemonWithStats pokemon={pokemon}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

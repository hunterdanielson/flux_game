import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import Stats from '../stats/Stats';

const PokemonWithStats = ({ pokemon }) => (
  <section>
    <Pokemon image={pokemon.image} />
    <Stats health={pokemon.health} attack={pokemon.attack} defense={pokemon.defense} />
  </section>
);

PokemonWithStats.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
  })
};

export default PokemonWithStats;

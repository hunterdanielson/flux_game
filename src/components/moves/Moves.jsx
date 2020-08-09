import React from 'react';
import styles from './Moves.css';
import { useTurn, useDispatch } from '../../hooks/gameContext';
import { attackEnemy, setEnemy } from '../../actions/gameActions';
import PropTypes from 'prop-types';
import { randomPokemon } from '../../utils/randomPokemon';

const Moves = ({ moves }) => {
  const turn = useTurn();
  const dispatch = useDispatch();
  
  return (
    <section className={styles.Moves} >
      {
        moves.map(move => <button key={move} onClick={() => turn(attackEnemy())}>{move}</button>)
      }
      <button onClick={() => {
        randomPokemon().then(pokemon => dispatch(setEnemy(pokemon))); 
      }} >Run</button>
    </section>
  );
};

Moves.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Moves;

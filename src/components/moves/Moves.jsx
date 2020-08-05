import React from 'react';
import styles from './Moves.css';
import { useTurn } from '../../hooks/gameContext';
import { attackEnemy, setEnemy } from '../../actions/gameActions';
import PropTypes from 'prop-types';

const Moves = ({ moves }) => {
  const turn = useTurn();
  
  return (
    <section className={styles.Moves} >
      {
        moves.map(move => <button key={move} onClick={() => turn(attackEnemy())}>{move}</button>)
      }
      <button onClick={() => turn(setEnemy())} >Run</button>
    </section>
  );
};

Moves.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Moves;

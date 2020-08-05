import React from 'react';
import styles from './Moves.css';
import { useTurn } from '../../hooks/gameContext';
import { attackEnemy, setEnemy } from '../../actions/gameActions';

const Moves = () => {
  const turn = useTurn();

  return (
    <section className={styles.Moves} >
      <button onClick={() => turn(attackEnemy())}>Attack</button>
      <button onClick={() => turn(attackEnemy())} >Attack2</button>
      <button onClick={() => turn(setEnemy())} >Run</button>
    </section>
  );
};

export default Moves;

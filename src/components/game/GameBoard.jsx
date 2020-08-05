import React, { useEffect } from 'react';
import { useAlly, useEnemy, useDispatch } from '../../hooks/gameContext';
import { setEnemy } from '../../actions/gameActions';
import PokemonWithStats from '../pokemon/PokemonWithStats';
import Results from '../results/Results';
import Moves from '../moves/Moves';
import styles from './GameBoard.css';

const GameBoard = () => {
  const dispatch = useDispatch();
  const ally = useAlly();
  const enemy = useEnemy();

  useEffect(() => {
    if(enemy.health > 0) return;
    
    dispatch(setEnemy());
  }, [enemy.health]);

  if(ally.health <= 0) return <Results />;

  return (
    <section className={styles.GameBoard}>
      
      <PokemonWithStats pokemon={ally} />
      {/* <Moves moves={ally.moves}/> */}
      <PokemonWithStats pokemon={enemy} />
    </section>
  );
};

export default GameBoard;

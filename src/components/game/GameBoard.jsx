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
  console.log('enemy:', enemy);

  useEffect(() => {
    if(enemy.health > 0) return;
    
    dispatch(setEnemy());
  }, [enemy.health]);

  if(ally.health <= 0) return <Results />;

  return (
    <section className={styles.GameBoard}>
      <div>
        <h1>Player</h1>
        <PokemonWithStats pokemon={ally} />
      </div>
      <div>
        <h2>Pick your move</h2>
        <Moves moves={ally.moves}/>
      </div>
      <div>
        <h1>Enemy</h1>
        <PokemonWithStats pokemon={enemy} />
      </div>
    </section>
  );
};

export default GameBoard;

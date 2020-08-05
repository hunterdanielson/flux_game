import { randomPokemon } from '../utils/randomPokemon';

export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = () => ({
  type: SET_ENEMY,
  //this payload is a pending promise when returned, messing up state when i set state to its value
  payload: randomPokemon()
});

export const SET_ALLY = 'SET_ALLY';
export const setALLY = () => ({
  type: SET_ALLY,
  //same thing here probably
  payload: randomPokemon()
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = () => ({
  type: ATTACK_ENEMY
});

export const ATTACK_ALLY = 'ATTACK_ALLY';
export const attackAlly = () => ({
  type: ATTACK_ALLY
});

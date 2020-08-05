import { randomPokemon } from '../utils/randomPokemon';

export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = () => ({
  type: SET_ENEMY,
  payload: randomPokemon()
});

export const SET_ALLY = 'SET_ALLY';
export const setALLY = () => ({
  type: SET_ALLY,
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

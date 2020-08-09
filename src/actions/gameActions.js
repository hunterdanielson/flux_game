export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = (data) => ({
  type: SET_ENEMY,
  payload: data
});

export const SET_ALLY = 'SET_ALLY';
export const setALLY = (data) => ({
  type: SET_ALLY,
  payload: data
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = (move) => ({
  type: ATTACK_ENEMY,
  payload: move
});

export const ATTACK_ALLY = 'ATTACK_ALLY';
export const attackAlly = (move) => ({
  type: ATTACK_ALLY,
  payload: move
});

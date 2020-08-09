export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = (data) => ({
  type: SET_ENEMY,
  //this payload is a pending promise when returned, messing up state when i set state to its value
  // dont call randompokemon here, call in a use effect and pass in data
  payload: data
});

export const SET_ALLY = 'SET_ALLY';
export const setALLY = (data) => ({
  type: SET_ALLY,
  //same thing here probably
  payload: data
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = () => ({
  type: ATTACK_ENEMY
});

export const ATTACK_ALLY = 'ATTACK_ALLY';
export const attackAlly = () => ({
  type: ATTACK_ALLY
});

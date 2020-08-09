import {
  SET_ENEMY,
  SET_ALLY,
  ATTACK_ALLY,
  ATTACK_ENEMY
} from '../actions/gameActions';

export const initialState = {
  ally: {
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    health: 45,
    attack: 49,
    defense: 49,
    moves: ['tackle', 'vine-whip', 'razor-leaf', 'headbutt'],
    attackPicked: {
      name: 'tackle',
      power: 40,
      accuracy: 100
    }
  },
  enemy: {
    name: 'squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    health: 4,
    attack: 48,
    defense: 65,
    moves: ['scratch', 'water-gun', 'bubble', 'hydro-pump'],
    attackPicked: {
      name: 'scratch',
      power: 40,
      accuracy: 100
    }
  }
};

const calculateDamage = (attack, attackPicked, defense) => {
  const randomNumberAccuracy = Math.floor(Math.random() * 100);
  const randomNumberDefense = Math.random() * 1 + 2;
  if(attackPicked.accuracy > randomNumberAccuracy) return attack * attackPicked.power / (defense * randomNumberDefense);
  return 0;
};

export default function reducer(state, action) {
  switch(action.type) {
    case ATTACK_ENEMY:
      console.log(action.payload);
      return { ...state, enemy: { ...state.enemy, health: state.enemy.health - calculateDamage(state.ally.attack, action.payload, state.enemy.defense) } };
    case ATTACK_ALLY:
      console.log(action.payload);
      return { ...state, ally: { ...state.ally, health: state.ally.health - calculateDamage(state.enemy.attack, action.payload, state.ally.defense) } };
    case SET_ENEMY:
      return { ...state, enemy: action.payload };
    case SET_ALLY:
      return { ...state, ally: action.payload };
    default: 
      return state;
  }
}

import {
  SET_ENEMY,
  SET_ALLY,
  ATTACK_ALLY,
  ATTACK_ENEMY
} from '../actions/gameActions';

export const initialState = {
  ally: {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    health: 45,
    attack: 49,
    defense: 49,
    moves: [{
      name: 'tackle',
      power: 40,
      accuracy: 100
    },
    {
      name: 'water-gun',
      power: 45,
      accuracy: 80
    },
    {
      name: 'bubble',
      power: 50,
      accuracy: 75
    },
    {
      name: 'hydro-pump',
      power: 65,
      accuracy: 75
    }
    ],
    attackPicked: {
      name: 'tackle',
      power: 40,
      accuracy: 100
    }
  },
  enemy: {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    health: 44,
    attack: 48,
    defense: 65,
    moves: [{
      name: 'scratch',
      power: 40,
      accuracy: 100
    },
    {
      name: 'ember',
      power: 45,
      accuracy: 80
    },
    {
      name: 'headbutt',
      power: 50,
      accuracy: 75
    },
    {
      name: 'flamethrower',
      power: 65,
      accuracy: 75
    }
    ],
    attackPicked: {
      name: 'scratch',
      power: 40,
      accuracy: 100
    }
  }
};

const calculateDamage = (attack, attackPicked, defense) => {
  const randomNumber = Math.floor(Math.random() * 100);
  if(attackPicked.accuracy > randomNumber) return attack * attackPicked.power / (defense * 3);
  return 0;
};

export default function reducer(state, action) {
  switch(action.type) {
    case ATTACK_ENEMY:
      return { ...state, enemy: { ...state.enemy, health: state.enemy.health - calculateDamage(state.ally.attack, state.ally.attackPicked, state.enemy.defense) } };
    case ATTACK_ALLY:
      return { ...state, ally: { ...state.ally, health: state.ally.health - calculateDamage(state.enemy.attack, state.enemy.attackPicked, state.ally.defense) } };
    case SET_ENEMY:
      return { ...state, enemy: action.payload };
    case SET_ALLY:
      return { ...state, ally: action.payload };
    default: 
      return state;
  }
}

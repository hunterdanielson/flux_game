import React, { useContext } from 'react';
import { attackAlly } from '../actions/gameActions';

export const GameContext = React.createContext();

export const useState = () => {
  const { state } = useContext(GameContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(GameContext);
  return dispatch;
};

export const useAlly = () => {
  const { ally } = useState();
  return ally;
};

export const useEnemy = () => {
  const { enemy } = useState();
  return { ...enemy };
};

export const useTurn = () => {
  const dispatch = useDispatch();

  return action => {
    dispatch(action);
    // eventually make this dynamic and pick a random move the enemy knows
    const move = { accuracy: 80, power: 45, name: 'pound' };
    dispatch(attackAlly(move));
  };
};

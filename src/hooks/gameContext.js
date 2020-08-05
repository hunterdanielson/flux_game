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
  console.log('why is this pending:', enemy);
  return enemy;
};

export const useTurn = () => {
  const dispatch = useDispatch();

  return action => {
    dispatch(action);

    dispatch(attackAlly());
  };
};

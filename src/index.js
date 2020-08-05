import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import GameProvider from './provider/GameProvider';

render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);

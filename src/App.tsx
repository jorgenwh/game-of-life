import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Grid from './components/Grid';
import GameOfLife from './gol/GoL';

const gameOfLife = new GameOfLife(110, 200);

function App() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gameOfLife.step(stepCount);

      const newStepCount = (stepCount >= 1000) ? 0 : stepCount + 1;
      setStepCount(newStepCount);
    }, 5);

    return () => clearInterval(interval);
  }, [stepCount]);

  const reset = () => {
    setStepCount(0);
  }

  return (
    <div className="App">
      <Header reset={reset} />
      <Grid grid={gameOfLife.getGrid()}/>
    </div>
  );
}

export default App;

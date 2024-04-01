import { useState, useEffect } from 'react';
import './App.css';

import Grid from './components/Grid';
import GameOfLife from './gol/GoL';

const CELL_SIZE = 10;
const TICK_MS = 5;
const RESET_INTERVAL = 1000;


const getViewDimensions = () => {
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  return {
    width,
    height
  };
}

const setGridDimensions = () => {
  const { width, height } = getViewDimensions();
  const rows = Math.floor(height / CELL_SIZE);
  const cols = Math.floor(width / CELL_SIZE);
  return { rows, cols };
}

const { rows, cols } = setGridDimensions();
let gameOfLife = new GameOfLife(rows, cols);

function App() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const { rows, cols } = setGridDimensions();
      gameOfLife.resize(rows, cols);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions

    const interval = setInterval(() => {
      gameOfLife.step(stepCount);

      const newStepCount = (stepCount >= RESET_INTERVAL) ? 0 : stepCount + 1;
      setStepCount(newStepCount);
    }, TICK_MS);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [stepCount]);

  const reset = () => {
    setStepCount(0);
  }

  return (
    <div className="App">
      <Grid grid={gameOfLife.getGrid()} cellSize={CELL_SIZE}/>
    </div>
  );
}

export default App;

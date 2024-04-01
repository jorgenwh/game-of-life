import './Grid.css';

import Cell from './Cell';

interface GridProps {
  grid: boolean[][];
  cellSize: number;
}

function Grid({ grid, cellSize } : GridProps) {
  const rows = grid.length;
  const cols = grid[0].length;

  const buildContent = () => {
    const cells = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        cells.push(<Cell alive={grid[i][j]} size={cellSize}/>);
      }
    }
    return cells;
  }

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`
  };

  return (
    <div className="Grid" style={gridStyle}>
      {buildContent()}
    </div>
  );
}

export default Grid;

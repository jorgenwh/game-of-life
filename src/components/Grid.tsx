import './Grid.css';

import GridRow from './GridRow';

interface GridProps {
  grid: boolean[][];
}

function Grid({ grid } : GridProps) {
  const rows = grid.length;

  const buildRowList = () => {
    const rowList = [];
    for (let i = 0; i < rows; i++) {
      rowList.push(<GridRow row={grid[i]} />);
    }
    return rowList;
  }

  return (
    <div className="Grid">
      {buildRowList()}
    </div>
  );
}

export default Grid;

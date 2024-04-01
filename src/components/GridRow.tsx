import './GridRow.css';

import Cell from './Cell';

interface GridRowProps {
  row: boolean[];
}

function GridRow({ row } : GridRowProps) {

  const buildCellList = () => {
    const cellList = [];
    for (let i = 0; i < row.length; i++) {
      cellList.push(<Cell alive={row[i]} />);
    }
    return cellList;
  }

  return (
    <div className="GridRow">
      {buildCellList()}
    </div>
  );
}

export default GridRow;

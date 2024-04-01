import './Cell.css';

interface CellProps {
  alive: boolean;
}

function Cell({ alive } : CellProps) {

  const style = { 
    backgroundColor: alive ? 'black' : 'white' 
  };

  return (
    <div className="Cell" style={style}>
    </div>
  );
}

export default Cell;

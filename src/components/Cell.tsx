
interface CellProps {
  alive: boolean;
  size: number;
}

function Cell({ alive, size } : CellProps) {

  const style = { 
    backgroundColor: alive ? 'black' : 'white',
    width: size,
    height: size
  };

  return (
    <div style={style}>
    </div>
  );
}

export default Cell;

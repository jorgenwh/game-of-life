import './Header.css';

interface HeaderProps {
  reset: () => void;
}

function Header({ reset } : HeaderProps) {

  return (
    <div className="Header">
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Header;

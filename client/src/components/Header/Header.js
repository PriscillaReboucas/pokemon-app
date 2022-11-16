import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Find your Pokemon</h1>
      <Link to='/pokemon' className='header__description'>Home</Link>
    </header>
  )
}

export default Header;
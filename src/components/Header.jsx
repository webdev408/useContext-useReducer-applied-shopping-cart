import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContextState } from '../contexts/AppContext';

const Header = () => {
  const items = CartContextState();

  return (
    <nav className='navbar'>
      <Link to='/'>Store</Link>
      <h2>Welcome to Farmer's Market</h2>
      <Link to ='/cart'><FaShoppingCart />({items.length})</Link>
    </nav>
  )
}
export default Header;
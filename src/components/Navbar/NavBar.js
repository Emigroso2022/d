
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='Navbar'>

            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categorias'>
                <NavLink to={'/category/Limpieza'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Limpieza</NavLink>
                <NavLink to={'/category/Bazar'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bazar</NavLink>
                <NavLink to={'/category/Alimientos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Alimientos</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
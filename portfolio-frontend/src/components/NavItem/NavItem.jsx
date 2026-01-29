import { NavLink } from 'react-router-dom';
import Styles from './NavItem.module.css';

function NavItem({ to, label }) {
    return <NavLink 
        to={to} 
        className={({ isActive }) =>
                isActive
                    ? `${Styles.itemAnchor} ${Styles.active}`
                    : Styles.itemAnchor
            }
    >
        {label}
    </NavLink>
}

export default NavItem;
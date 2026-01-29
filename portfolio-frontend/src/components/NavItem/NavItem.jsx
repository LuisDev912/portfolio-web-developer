import { Link } from 'react-router-dom';
import Styles from './NavItem.module.css';

function NavItem({ to, label }) {
    return <Link to={to} className={Styles.itemAnchor}>{label}</Link>
}

export default NavItem;
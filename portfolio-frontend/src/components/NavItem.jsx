import { Link } from 'react-router-dom';

function NavItem({ to, label }) {
    return <Link to={to}>{label}</Link>
}

export default NavItem;
import { Link } from 'react-router-dom';

// this component will show either a section link or a different page URL

function NavItem({ type, to, label }) {
    if (type === 'route') {
        return <Link to={to}>{label}</Link>
    }

    return <a href={`#${to}`}>{label}</a>
}

export default NavItem;
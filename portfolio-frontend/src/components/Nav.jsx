import { navRoutes } from "../data/navCongif";
import NavItem from "./NavItem";
// this component will contain different nav items that lead to different parts of the app 

function Nav() {
    return (
        <nav style={{
            // these styles will be in a CSS module
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '100',
            textAlign: 'center'
        }}>
            {navRoutes.map(route => (
                <NavItem
                    key={route.to}
                    to={route.to}
                    label={route.label}
                />
            ))}
        </nav>
    )
}

export default Nav;
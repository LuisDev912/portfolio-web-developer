import { navRoutes } from "../../data/navCongif";
import NavItem from "../NavItem";
import Styles from './Nav.module.css'
// this component will contain different nav items that lead to different parts of the app 

function Nav() {
    return (
        <nav className={Styles.navBar}>
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
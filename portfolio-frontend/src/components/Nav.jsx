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
            <NavItem type="route" to="/projects" label="View all projects" />
        </nav>
    )
}

export default Nav;
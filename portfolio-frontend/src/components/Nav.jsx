import NavItem from "./NavItem";
// this component will contain different nav items that lead to different parts of the app 

function Nav() {
    return (
        <nav>
            <NavItem type="route" to="/projects" label="go to projects" />
            <NavItem type="scroll" to="projects-section" label="see featured projects" />
        </nav>
    )
}

export default Nav;
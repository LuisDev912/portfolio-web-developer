import Contact from './Contact.jsx';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} - Luis Calleja</p>

            <Contact />
        </footer>
    )
}

export default Footer;
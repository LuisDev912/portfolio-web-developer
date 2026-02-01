import Contact from './Contact/Contact.jsx';

function Footer() {
    return (
        <footer>
            <p className='italic small-text'>&copy; {new Date().getFullYear()} - Luis Calleja. MIT License</p>
            <Contact />
        </footer>
    )
}

export default Footer;
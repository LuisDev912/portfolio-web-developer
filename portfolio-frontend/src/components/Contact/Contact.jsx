import Styles from './Contact.module.css'

function Contact() {
    return (
        <section className={Styles.information} id='information-section'>
            <p>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <span className="sr-only">My Email</span>
                <a href="mailto:luiscallejaenrique@gmail.com">luiscallejaenrique@gmail.com</a>
            </p>
            
            <p>
                <i className="fa-brands fa-github-square" aria-hidden="true"></i>
                <span className="sr-only">My GitHub profile</span>
                <a href="https://github.com/LuisDev912" target="_blank" rel="noopener">GitHub</a>
            </p>
        </section>
    );
};

export default Contact;
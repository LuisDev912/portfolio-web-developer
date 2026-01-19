function Contact() {
    return (
        <section className="information">
            <p>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <span className="sr-only">Email:</span>
                <a href="mailto:luiscallejaenrique@gmail.com">luiscallejaenrique@gmail.com</a> <br />

                <i className="fa-brands fa-github-square" aria-hidden="true"></i>
                <span className="sr-only">GitHub profile</span>
                <a href="https://github.com/LuisDev912" target="_blank" rel="noopener">GitHub</a>
            </p>
        </section>
    );
};

export default Contact;
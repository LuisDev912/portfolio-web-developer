function Hero({ title, description, children }) {
    return (
        <section className='hero' id='introduction-section'>
            <h1 className="heading-primary">
                {title}
            </h1>

            <p className="heading-tertiary prose">
                {description}
            </p>

            {children}
        </section>
    )
}

export default Hero;
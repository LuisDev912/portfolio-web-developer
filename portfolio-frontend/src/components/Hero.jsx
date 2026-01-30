function Hero({ title, description }) {
    return (
        <section className='hero' id='introduction-section'>
            <h1 className="heading-primary">
                {title}
            </h1>

            <p className="heading-tertiary prose">
                {description}
            </p>
        </section>
    )
}

export default Hero;
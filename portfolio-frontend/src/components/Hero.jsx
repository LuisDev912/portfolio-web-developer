function Hero() {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            
            <h1 className="heading-primary">
                Frontend-oriented Full Stack Developer 
            </h1>

            <p className="heading-tertiary prose">
                Building clean, accessible web applications with modern JavaScript. 
            </p>
        </section>
    )
}

export default Hero;
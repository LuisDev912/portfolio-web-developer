import Hero from "../components/Hero"
import Learning from "../components/Learning/Learning.jsx"
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"

export default function HomePage() {
    return (
        <>
            <Hero />
            <Learning />
            <section>
                <h3 className="heading-secondary">Projects</h3>
                <ProjectCard
                    title='example'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
                    image='blank'
                    stack={['React', 'i18n']}
                    demoUrl='http://page.host.com'
                    codeUrl='https://github.com/example'
                
                />
            </section>
        </>
    )
}
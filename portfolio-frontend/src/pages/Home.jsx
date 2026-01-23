import Hero from "../components/Hero"
import Learning from "../components/Learning/Learning.jsx"
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"

export default function HomePage() {
    return (
        <>
            <Hero />
            <Learning />
            <ProjectCard
                title='example'
                description='Description example for the card'
                image='blank'
                stack={['React', 'i18n']}
                demoUrl='http://page.host.com'
                codeUrl='https://github.com/example'
            
            />
        </>
    )
}
import Hero from "../components/Hero";
import Learning from "../components/Learning/Learning.jsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";
import { projects } from "../data/projects.js";

export default function HomePage() {
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <>
            <Hero />
            <Learning />
            <ProjectsSection title='Featured projects' projects={featuredProjects} />
        </>
    )
}
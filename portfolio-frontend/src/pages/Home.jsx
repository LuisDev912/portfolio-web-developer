import { projects } from "../data/projects.js";
import { useNavigate } from 'react-router';
import Hero from "../components/Hero";
import Learning from "../components/Learning/Learning.jsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";

export default function HomePage() {
    const navigate = useNavigate();
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <>
            <Hero />
            <Learning />
            <ProjectsSection title='Featured projects' projects={featuredProjects} />
            <button onClick={() => navigate('/projects')}>
                See more projects
            </button>
        </>
    );
};
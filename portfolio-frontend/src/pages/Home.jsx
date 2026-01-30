import { projects } from "../data/projects.js";
import { useNavigate } from 'react-router';
import Hero from "../components/Hero";
import About from "../components/About.jsx";
import Learning from "../components/Learning/Learning.jsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";

export default function HomePage() {
    const navigate = useNavigate();
    const featuredProjects = projects.filter(project => project.featured);

    return (
        <>
            <Hero 
                title="Hi, I'm Luis!
                Frontend-oriented full-stack developer based in Argentina" description="Building clean, accessible web applications with modern JavaScript." 
            > 
                <About />
            </Hero>

            <Learning />
            <ProjectsSection 
                title='Featured projects' 
                projects={featuredProjects} 
            />

            <button onClick={() => navigate('/projects')}>
                See more projects
            </button>
        </>
    );
};
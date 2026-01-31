import { useNavigate } from 'react-router';
import { useSEO } from '../hooks/useSEO.jsx';
import { projects } from "../data/projects.js";
import Hero from "../components/Hero";
import About from "../components/About.jsx";
import Learning from "../components/Learning/Learning.jsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";

export default function HomePage() {
    const navigate = useNavigate();
    const featuredProjects = projects.filter(project => project.featured);

    useSEO({
        title: "Luis | Frontend-oriented Full Stack Developer",
        description: "Frontend-oriented full stack developer building accessible, modern and minimalist web applications with React, JavaScript and Node.js.",
        og: {
            title: "Luis | Frontend-oriented Full Stack Developer",
            description: "Frontend-oriented full stack developer building accessible, modern and minimalist web applications with React, JavaScript and Node.js."
        }
    });

    return (
        <>
            <Hero 
                title="Hi, I'm Luis!" 
                description="Frontend-oriented full-stack developer based in Argentina" 
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
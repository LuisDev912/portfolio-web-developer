import { projects } from "../data/projects";
import { useNavigate } from 'react-router-dom';
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Hero from "../components/Hero";


export default function Projects() {
    const navigate = useNavigate();
    
    return (
        <>
            <Hero
                title="Projects"
                description="Collection of projects focused on clean UI, accessibility and maintainable code"
            />

            <ProjectsSection title='Projects' projects={projects} />

            <button
                onClick={() => navigate('/')}>
                Return to the home page
            </button>
        </>
    );
};
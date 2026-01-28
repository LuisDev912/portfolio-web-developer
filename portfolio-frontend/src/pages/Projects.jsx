import { projects } from "../data/projects";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import { useNavigate } from 'react-router-dom';


export default function Projects() {
    const navigate = useNavigate();
    
    return (
        <>
            <ProjectsSection title='Projects' projects={projects} />

            <button
                onClick={() => navigate('/')}>
                Return to the home page
            </button>
        </>
    );
};
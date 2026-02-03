import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSEO } from "../hooks/useSEO";
import { getProjects } from "../services/api";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import Hero from "../components/Hero";


export default function Projects() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProjects()
            .then(setProjects)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    
    useSEO({
        title: 'Projects | Luis - Frontend-oriented Full Stack Developer',
        description: 'Selected frontend and full stack projects.',
        og: {
            title: 'Projects | Luis',
            description: 'Selected frontend and full stack projects.'
        }
    });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
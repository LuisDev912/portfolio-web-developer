import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO.jsx';
import { getFeatured } from '../services/api.js';
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Learning from "../components/Learning/Learning.jsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.jsx";

export default function HomePage() {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFeatured()
            .then(setProjects)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    useSEO({
        title: "Luis | Frontend-oriented Full Stack Developer",
        description: "Frontend-oriented full stack developer building accessible, modern and minimalist web applications with React, JavaScript and Node.js.",
        og: {
            title: "Luis | Frontend-oriented Full Stack Developer",
            description: "Frontend-oriented full stack developer building accessible, modern and minimalist web applications with React, JavaScript and Node.js."
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
                projects={projects} 
            />

            <button onClick={() => navigate('/projects')}>
                See more projects
            </button>
        </>
    );
};
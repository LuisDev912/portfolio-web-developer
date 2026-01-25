import { projects } from "../data/projects";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";


export default function Projects() {
    return (
        <>
            <ProjectsSection title='Projects' projects={projects} />
        </>
    );
};
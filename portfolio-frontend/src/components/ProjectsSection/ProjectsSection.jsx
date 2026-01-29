import { Code } from '../../svg-icons/Code.jsx';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Styles from './ProjectsSection.module.css';

function ProjectsSection({ title, projects }) {
    return (
        <section className={Styles.projects} id='projects-section'>
            <div className={Styles.introduction}>
                <Code />
                <h3 className="heading-secondary">{title}</h3>
            </div>

            <div className={Styles.projectsContainer}>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};


export default ProjectsSection;
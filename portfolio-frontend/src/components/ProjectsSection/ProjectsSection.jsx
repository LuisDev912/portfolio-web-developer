import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Styles from './ProjectsSection.module.css';

function ProjectsSection({ title, projects }) {
    return (
        <section className={Styles.projects}>
            <h3 className="heading-secondary">{title}</h3>

            <div className={Styles.gridContainer}>
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
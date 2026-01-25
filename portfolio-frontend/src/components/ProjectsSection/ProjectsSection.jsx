import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import Styles from './ProjectsSection.module.css';

function ProjectsSection({ title, projects }) {
    return (
        <section>
            <h3 className="heading-secondary">{title}</h3>

            <div className={Styles.gridContainer}>
                
            </div>
        </section>
    );
};


export default ProjectsSection;
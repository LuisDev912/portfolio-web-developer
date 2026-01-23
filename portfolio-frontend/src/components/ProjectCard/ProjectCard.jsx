// import Styles from './ProjectCard/ProjectCard.module.css';

function ProjectCard({ title, description, image, stack, demoUrl, codeUrl }) {
    return (
        <article className="card">
            <div className="imageWrapper">
                <img src={image} alt={`screenshot of ${title}`} />
            </div>
        </article>
    )
}

export default ProjectCard;
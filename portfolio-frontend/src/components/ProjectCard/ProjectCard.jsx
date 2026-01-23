import Styles from './ProjectCard.module.css';


function ProjectCard({ title, description, image, stack, demoUrl, codeUrl }) {
    return (
        <article className={Styles.card}>
            <div className={Styles.imageWrapper}>
                <img src={image} alt={`screenshot of ${title}`} />
            </div>

            <div className={Styles.content}>
                <h3>{title}</h3>

                <p>{description}</p>
                
                <ul className={Styles.stack}>
                    {stack.map(tech => (
                        <li key={tech} className={Styles.stackItem}>
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className={Styles.links}>
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Live demo
                        </a>
                    )}

                    {codeUrl && (
                        <a
                            href={codeUrl}
                            target='_blank'
                            rel='noreferrer'
                        >
                            Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;
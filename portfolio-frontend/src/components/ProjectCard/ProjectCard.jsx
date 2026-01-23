import Styles from './ProjectCard.module.css';


function ProjectCard({ title, description, image, stack, demoUrl, codeUrl }) {
    return (
        <article className={Styles.card}>
            <div className={Styles.imageWrapper}>
                <img src={image} alt={`screenshot of ${title}`} />
            </div>

            <div className={Styles.content}>
                <h3 className={Styles.title}>{title}</h3>

                <ul className={Styles.stack}>
                    {stack.map(tech => (
                        <li key={tech} className={Styles.stackItem}>
                            {tech}
                        </li>
                    ))}
                </ul>

                <p className='prose'>{description}</p>

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
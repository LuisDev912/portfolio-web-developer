import Styles from './ProjectCard.module.css';
import { PreviewProject } from '../../svg-icons/PreviewProject.jsx'
import { LinkToCode } from '../../svg-icons/LinkToCode.jsx';

function ProjectCard({ title, subtitle, description, image, stack, demoUrl, codeUrl }) {
    return (
        <article className={Styles.card}>
            <div className={Styles.imageWrapper}>
                <img src={image} alt={`screenshot of ${title}`} loading='lazy' />
            </div>

            <div className={Styles.content}>
                <h3 className={Styles.title}>{title}</h3>
                <p className={Styles.subtitle}>{subtitle}</p>

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
                            <PreviewProject />
                            Live demo
                        </a>
                    )}

                    {codeUrl && (
                        <a
                            href={codeUrl}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <LinkToCode />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;
import { LearningIcon } from '../../svg-icons/LearningIcon';
import Styles from './Learning.module.css'

function Learning() {
    const courses = [
        {
            id: "jscamp",
            title: "Full Stack JavaScript Bootcamp",
            provider: "Midudev",
            status: "In progress",
            focus: ["JavaScript", "React", "Node.js", "Express", "Testing", "In process..."],
            year: "2025-Present"
        },
        {
            id: "web.dev",
            title: "Responsive Web Design",
            provider: "Google",
            focus: ["Mobile-first", "Flexbox", "CSS Grid"],
            year: "2025"
        },
        {
            id: "html-css-google",
            title: "HTML & CSS Foundations",
            provider: "Google",
            focus: ["Semantic HTML", "Modern CSS"],
            year: "2024"
        }
    ];

    return (
        <section>
            <div className={Styles.introduction}>
                <LearningIcon />
                <h2 className="heading-secondary">Learning & Training</h2>
            </div>

            <ul className={Styles.coursesList}>
                {courses.map(course => (
                    <li key={course.id} className={Styles.courseCard}>

                        <header className="course-header">
                            <h3 className={Styles.courseTitle}>{course.title}</h3>

                            <span className={Styles.courseProvider}>
                                {course.provider}
                                {course.status && ` · ${course.status}`}
                            </span>
                        </header>

                        <p className="course-year small-text">
                            {course.year}
                        </p>

                        <span className='italic'>concepts: </span>
                        <ul className={Styles.focusList}>
                            {course.focus.map(tech => (
                                <li key={tech} className={Styles.focusElement}>{tech}</li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Learning;
import { useEffect, useState } from 'react';
import { getCourses } from '../../services/api';
import { LearningIcon } from '../../svg-icons/LearningIcon';
import Styles from './Learning.module.css'

function Learning() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCourses()
            .then(setCourses)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section id='learning-section'>
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
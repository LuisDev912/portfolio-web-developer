function Learning() {
    const courses = [
        {
            id: "jscamp",
            title: "Full Stack JavaScript Bootcamp",
            provider: "Midudev",
            status: "In progress",
            focus: ["JavaScript", "React", "Node.js", "Express", "Testing"],
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
            <h2 className="heading-secondary">Learning & Training</h2>

            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course.id} className="course-card">

                        <header className="course-header">
                            <h3 className="course-title">{course.title}</h3>
                            <span className="course-year">{course.year}</span>
                        </header>

                        <p className="course-provider">
                            {course.provider}
                            {course.status && ` · ${course.status}`}
                        </p>

                        <ul className="course-focus">
                            {course.focus.map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>

                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Learning;
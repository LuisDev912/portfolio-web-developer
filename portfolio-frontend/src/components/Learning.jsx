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
            id: "rwd-google",
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
        <section style={{marginTop: '5rem'}}>
            <h2 className="heading-tertiary">
                Learning & Experience
            </h2>
        </section>
    )
}

export default Learning;
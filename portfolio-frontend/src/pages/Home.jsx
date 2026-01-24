import Hero from "../components/Hero"
import Learning from "../components/Learning/Learning.jsx"
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"

export default function HomePage() {
    return (
        <>
            <Hero />
            <Learning />
            <section>
                <h3 className="heading-secondary">Projects</h3>
                <ProjectCard
                    title='Fast Shopping List - Create your grocery list and calculate prices easily.'
                    description='Fast Shopping List is a simple frontend project that lets you create shopping lists and calculate total prices easily. You can insert the name of a product, its price, and the amount of units or packages.
                    The app automatically calculates the total cost and saves your lists in the browser using localStorage.'
                    image='/images/shop-list-preview.webp'
                    stack={['React', 'i18n']}
                    demoUrl='https://luisdev912.github.io/shop-list/'
                    codeUrl='https://github.com/LuisDev912/shop-list'
                
                />
            </section>
        </>
    )
}
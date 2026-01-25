// this file holds all the data that each card of ProjectCard.jsx
// have to display, containing the id, title, stack, etc.

export const projects = [
    {
        id: 1,
        featured: true,
        title: 'Fast Shopping List - Create your grocery list and calculate prices easily.',
        description: 'A simple frontend page that lets you create shopping lists and calculate total prices easily. You can insert the name of a product, its price, and the amount of units or packages. The app automatically calculates the total cost and saves your lists in the browser using localStorage.',
        image: '/images/shop-list-preview.webp',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoUrl: 'https://luisdev912.github.io/shop-list/',
        codeUrl: 'https://github.com/LuisDev912/shop-list'
    },
    {
        id: 2,
        featured: true,
        title: 'Rosary guide - learn how to pray the Holy Rosary step by step',
        description: 'A modern, accessible and multilingual guide for praying the Holy Rosary step by step with a simple, clear and responsive style. Contains an information page about the basics of the Rosary with a page that helps while praying',
        image: '/images/Rosary-guide-preview.webp',
        stack: ['React', 'i18n', 'CSS Modules', 'Accessibility'],
        codeUrl: 'https://github.com/LuisDev912/Rosary-guide'
    }
];
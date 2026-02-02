export const projects = [
    {
        id: 1,
        featured: true,
        title: 'Fast Shopping List',
        subtitle: 'Create your grocery list and calculate prices easily.',
        description: 'A simple frontend page that lets you create shopping lists and calculate total prices easily. You can insert the name of a product, its price, and the amount of units or packages. The app automatically calculates the total cost and saves your lists in the browser using localStorage.',
        image: '/images/shop-list-preview.webp',
        stack: ['JavaScript', 'HTML', 'CSS'],
        demoUrl: 'https://luisdev912.github.io/shop-list/',
        codeUrl: 'https://github.com/LuisDev912/shop-list'
    },
    {
        id: 2,
        featured: true,
        title: 'Rosary Guide',
        subtitle: 'Learn how to pray the Holy Rosary step by step.',
        description: 'A modern, accessible and multilingual guide for praying the Holy Rosary step by step with a simple, clear and responsive style. Contains an information page about the basics of the Rosary with a page that helps while praying',
        image: '/images/Rosary-guide-preview.webp',
        stack: ['React', 'i18n', 'CSS Modules', 'Accessibility'],
        codeUrl: 'https://github.com/LuisDev912/Rosary-guide'
    },
    {
        id: 3,
        featured: false,
        title: 'School simulator',
        subtitle: 'Basic school panel.',
        description: 'A simple frontend page that uses fetch to load information of a selected class including names, attendance, average grades and warning. You can also add a student with its name and initial grade. All the information included is not real.',
        image: '/images/School-simulator-preview.webp',
        stack: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/LuisDev912/frontend-practices/tree/main/school-simulator',
        demoUrl: 'https://luisdev912.github.io/frontend-practices/school-simulator/'
    },
    {
        id: 4,
        featured: false,
        title: 'USD to ARS',
        subtitle: 'Currency converter.',
        description: 'A frontend page that consumes a real API and returns the current value of different dollar rates. It calculates the value using cross multiplication with the direction exchange selected. This page also contains a custom element that shows different types of dollar rates with their values.',
        image: '/images/Usd-to-ars-preview.webp',
        stack: ['HTML', 'CSS', 'JavaScript', 'Custom Elements', 'API'],
        codeUrl: 'https://github.com/LuisDev912/frontend-practices/tree/main/usd-to-ars',
        demoUrl: 'https://luisdev912.github.io/frontend-practices/usd-to-ars/'
    },
    {
        id: 5,
        featured: false,
        title: 'React Math',
        subtitle: 'Basic Math Practice.',
        description: 'A modern, accessible and minimalist React page. This app helps to practice math using two numbers generated randomly between 1 and 50 and the user has to type the sum of both numbers. This page is a demo of a future learning page.',
        image: '/images/React-math-preview.webp',
        stack: ['React', 'CSS Modules'],
        codeUrl: 'https://github.com/LuisDev912/react-math/',
        demoUrl: 'https://react-math-steel.vercel.app/'
    },
    {
        id: 6,
        featured: false,
        title: 'Irregular Verbs Trainer ',
        subtitle: 'Train your English grammar',
        description: 'A simple Python CLI program to practice irregular English verbs. The user must guess the correct past simple form of randomly chosen verbs. This project is meant to help learners improve their English vocabulary. The program also saves information such as total points and history.',
        image: '/images/English-trainer-preview.webp',
        stack: ['Python', 'CLI', 'JSON', 'OOP'],
        codeUrl: 'https://github.com/LuisDev912/irregular-verbs-trainer/'
    }
];
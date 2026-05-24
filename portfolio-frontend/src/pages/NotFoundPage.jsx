import { useNavigate } from 'react-router';
import { useSEO } from '../hooks/useSEO.jsx';

export default function NotFoundPage() {
    const navigate = useNavigate();

    useSEO({
        title: "404 | Not Found Page",
        description: "The page you were looking for does not exist.",
        og: {
            title: "404 | Not Found Page",
            description: "The page you were looking for does not exist."
        },
        noIndex: true,
    });

    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
            id='Not-found-section'
        >
            <h1
                className="heading-primary"
            >
                Oops!
            </h1>
            <p className='prose'>
                It seems like the page you were looking for does not exist. Please return to the home page.
            </p>

            <button
                onClick={() => navigate('/')}>
                Return to the home page
            </button>
        </section>
    );
};
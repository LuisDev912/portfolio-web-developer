import { useNavigate } from 'react-router';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section
            style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column'
            }}
        >
            <h1
                className="heading-primary"
            >
                Oops!
            </h1>
            <p>
                It seems like the page you were looking for does not exist. Please return to the home page.
            </p>

            <button
                onClick={() => navigate('/')}>
                Return
            </button>

            <button>
                example
            </button>
        </section>
    );
};
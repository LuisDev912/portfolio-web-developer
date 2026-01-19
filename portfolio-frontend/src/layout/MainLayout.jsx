import { Outlet } from "react-router";
// import { Header, Footer } from "../components/Semantic.jsx";
import { useRef, useEffect } from "react";

function MainLayout() {
    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) mainRef.current.focus();
    }, [location.pathname])

    return (
        <>
            {/* <Header /> */}

            <button
                className="skip-link"
                onClick={() => {
                    document.getElementById('main-content')?.focus()
                }}
            >
                skip to content
            </button>

            <main
                id="main-content"
                tabIndex='-1'
                ref={mainRef}
            >
                <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    );
}

export default MainLayout;
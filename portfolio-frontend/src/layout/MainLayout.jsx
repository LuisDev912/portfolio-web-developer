import { Outlet } from "react-router";
import { useRef, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";

function MainLayout() {
    const mainRef = useRef(null);

    useEffect(() => {
        if (mainRef.current) mainRef.current.focus();
    }, [location.pathname])

    return (
        <>
            <Nav />
            

            <button
                className="skip-link"
                onClick={() => {
                    mainRef.current?.focus()
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

            <Footer />
        </>
    );
}

export default MainLayout;
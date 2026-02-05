import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's automatic scroll restoration on refresh
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to top on mount and whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;

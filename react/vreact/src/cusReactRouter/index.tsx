import { createContext } from 'react';

const RouterContext = createContext({
    currentPath: ''
});


import { useState, useEffect } from 'react';

const Router = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onPopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onPopState);

        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, []);

    return (
        <RouterContext.Provider value={{ currentPath }}>
            {children}
        </RouterContext.Provider>
    );
};

export { Router, RouterContext };
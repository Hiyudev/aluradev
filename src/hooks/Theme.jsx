import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeWrapper({ children }) {
    const [theme, setTheme] = useState('blue');
    const [palette, setPalette] = useState('blue');
    const contextProps = {
        theme, setTheme, palette, setPalette
    };

    useEffect(() => {
        const storagetheme = localStorage.getItem('@usertheme');
        const storagepalette = localStorage.getItem('@userpalette');
        
        storagetheme == null ? localStorage.setItem('@usertheme', 'blue') : setTheme(storagetheme);
        storagepalette == null ? localStorage.setItem('@userpalette', 'blue') : setPalette(storagepalette);
    }, [])

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem('@usertheme', theme);
    }, [theme])

    useEffect(() => {
        document.querySelector('html').setAttribute('data-palette', palette);
        localStorage.setItem('@userpalette', palette);
    }, [palette])

    return (
        <ThemeContext.Provider value={contextProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
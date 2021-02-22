import React from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    },
    Vaporwave: {
        foreground: "#8d8bff",
        background: "#ddd6ff"
    },
    Microsoft: {
        background: '#71BAE9'
    },
    IBM: {
        background: '#2376bc'
    },
    RetroApple: {
        background: 'rgba(244, 171, 142, 1)'
    }
};

export const ThemeContext = React.createContext(themes.vaporwave);

import React from "react";
/*
    Background: For actual Elements (I.E Footer, Navbar, Events, etc)
    Foreground: For actual Elements (I.E Footer, Navbar, Events, etc).

    For more then 1 element, mix the background and foreground:
        For example, the Navbar uses the Foreground and the Footer uses the Background


    BackgroundImage: For Gradient Backgrounds (I.E Timeline Gradient Fill)
*/
export const themes = {
    Vaporwave: {
        foreground: "#8d8bff",
        background: "#ddd6ff",

        textColor: '#6666fa',
        textNavbarColor: '#6666fa',
        textFooterColor: '#6666fa',
        headerColor: '#08087c',

        textEventColor: 'black',
        borderLeftColor: '4mm ridge #9E73D3',
        borderRightColor: '4mm ridge #5C8BAD',
        borderTopColor: '4mm ridge #9E73D3',
        borderBottomColor: '4mm ridge #5C8BAD',

        backgroundImage: "linear-gradient(180deg, rgba(210, 174, 255, 0.1575) 0%, rgba(184, 225, 255, 0.3) 20.84%, rgba(197, 191, 255, 0.3) 45.83%, rgba(184, 225, 255, 0.3) 70.31%, rgba(197, 191, 255, 0.3075)",
        navbarBackground: "#8d8bff"
    },
    Microsoft: {
        foreground: "black",
        background: '#71BAE9',

        textColor: '#71BAE9',
        textNavbarColor: '#50c0ff',
        textFooterColor: 'white',
        headerColor: '#000000',

        textEventColor: '#009fff',

        backgroundImage: "linear-gradient(180deg, rgba(0, 133, 208, 0.3) 0%, rgba(147, 216, 255, 0.3) 51.04%, rgba(0, 133, 208, 0.3) 100%)",
        navbarBackground: "#71bae9"
    },
    IBM: {
        foreground: "black",
        background: '#71BAE9',

        textColor: '#71BAE9',
        textNavbarColor: '#50c0ff',
        textFooterColor: 'white',
        headerColor: '#009cff',

        textEventColor: '#009fff',

        backgroundImage: "linear-gradient(180deg, rgba(197, 231, 255, 0.225) 0%, rgba(38, 129, 194, 0.3075) 52.6%, rgba(197, 231, 255, 0.225) 97.39%, rgba(226, 243, 255, 0.75) 100%)",
        navbarBackground: "#71bae9"
    },
    Apple: {
        foreground: '#00BD00',
        background: 'rgba(244, 171, 142, 1)',

        textColor: 'white',
        textNavbarColor: 'rgb(255,120,75)',
        textFooterColor: 'white',
        headerColor: '#000000',

        textEventColor: 'rgb(0,0,0)',
        borderLeftColor: '4mm ridge #feef00',
        borderRightColor: '4mm ridge #FE8100',
        borderTopColor: '4mm ridge #9e73d3',
        borderBottomColor: '4mm ridge #00b400',

        backgroundImage: 'linear-gradient(180deg, rgba(0, 189, 0, 0.3) 0%, rgba(255, 240, 0, 0.3) 18.23%, rgba(255, 149, 0, 0.3) 38.54%, rgba(213, 29, 0, 0.3) 59.37%, rgba(187, 41, 167, 0.3) 80.73%, rgba(0, 169, 255, 0.3) 100%)',
        navbarBackground: 'rgba(244, 171, 142, 1)'
    }
};

export const ThemeStyles = React.createContext(themes.vaporwave);
export default themes;

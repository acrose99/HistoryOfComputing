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
        borderDefault: '4mm ridge black',
        borderLeftColor: '4mm ridge #9E73D3',
        borderRightColor: '4mm ridge #5C8BAD',
        borderTopColor: '4mm ridge #9E73D3',
        borderBottomColor: '4mm ridge #5C8BAD',

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
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
        borderDefault: '4mm ridge black',
        backgroundImage: "linear-gradient(rgb(86, 204, 242, .5), rgb(47, 128, 237, .5))",
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
        borderDefault: '4mm ridge black',
        backgroundImage: "linear-gradient(rgb(86, 204, 242, .5), rgb(47, 128, 237, .5))",
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
        borderDefault: '4mm ridge black',
        borderLeftColor: '4mm ridge #feef00',
        borderRightColor: '4mm ridge #FE8100',
        borderTopColor: '4mm ridge #9e73d3',
        borderBottomColor: '4mm ridge #00b400',

        backgroundImage: 'linear-gradient(rgb(255, 195, 113, .5), rgb(255, 95, 109, .5))',
        navbarBackground: 'rgba(244, 171, 142, 1)'
    },

};

export const ThemeStyles = React.createContext(themes.vaporwave);
export default themes;

import React from "react";
/*
    Background: For actual Elements (I.E Footer, Navbar, Events, etc)
    Foreground: For actual Elements (I.E Footer, Navbar, Events, etc).

    For more then 1 element, mix the background and foreground:
        For example, the Navbar uses the Foreground and the Footer uses the Background


    BackgroundImage: For Gradient Backgrounds (I.E TimelineComponent Gradient Fill)
*/
export const themes = {
    Vaporwave: {
        foreground: "#8d8bff",
        background: "#ddd6ff",

        textColor: '#000000',
        textNavbarColor: '#6666fa',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #9E73D3',
        borderRightColor: '4mm ridge #5C8BAD',
        borderTopColor: '4mm ridge #9E73D3',
        borderBottomColor: '4mm ridge #5C8BAD',

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    Microsoft: {
        foreground: "black",
        background: '#00AFF0',

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: 'white',
        headerColor: '#000000',

        textEventColor: '#000000',
        borderDefault: '4mm ridge #9E73D3',
        borderLeftColor: '4mm ridge #00AFF0',
        borderRightColor: '4mm ridge #00AFF0',
        borderTopColor: '4mm ridge #00AFF0',
        borderBottomColor: '4mm ridge #00AFF0',

        backgroundImage: "linear-gradient(rgba(0, 175, 240, .2), rgba(0, 175, 240, .8))",
        navbarBackground: "rgba(0, 175, 240, .8)"
    },
    IBM: {
        foreground: "black",
        background: 'rgba(0, 117, 183, 0.6)',

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: 'black',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge white',
        borderRightColor: '4mm ridge rgba(0, 117, 183)',
        borderTopColor: '4mm ridge rgba(0, 117, 183)',
        borderBottomColor: '4mm ridge white',
        backgroundImage: "linear-gradient(rgba(225, 248, 248, 0.41), rgba(0, 117, 183, .4))",
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

        backgroundImage: 'linear-gradient(rgb(255, 195, 113, .5), rgb(255, 95, 109, .5))',
        navbarBackground: 'rgba(244, 171, 142, 1)'
    },
    Ancient: {
        foreground: "#94716B",
        background: "#B79891",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#2f2f2f',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #94716B',
        borderRightColor: '4mm ridge #B79891',
        borderTopColor: '4mm ridge #94716B',
        borderBottomColor: '4mm ridge #B79891',

        backgroundImage: "linear-gradient(rgb(183, 152, 145, .5), rgb(148, 113, 107, .5))",
        navbarBackground: "#94716B"
    },
    Medieval: {
        foreground: "#8e9eab",
        background: "#eef2f3",

        textColor: '#0a0a0a',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #8e9eab',
        borderRightColor: '4mm ridge #eef2f3',
        borderTopColor: '4mm ridge #8e9eab',
        borderBottomColor: '4mm ridge #eef2f3',

        backgroundImage: "linear-gradient(rgb(238, 242, 243, .5), rgb(142, 158, 171, .5))",
        navbarBackground: "#8e9eab"
    },
    Enlightenment: {
        foreground: "#757F9A",
        background: "#D7DDE8",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #757F9A',
        borderRightColor: '4mm ridge #D7DDE8',
        borderTopColor: '4mm ridge #D7DDE8',
        borderBottomColor: '4mm ridge #757F9A',

        backgroundImage: "linear-gradient(rgb(215, 221, 232, .5), rgb(117, 127, 154, .5))",
        navbarBackground: "#757F9A"
    },
    Industrial: {
        foreground: "#1e130c",
        background: "#9a8478",

        textColor: '#ffffff',
        textNavbarColor: '#ffffff',
        textFooterColor: '#ffffff',
        headerColor: '#ffffff',

        textEventColor: 'white',

        borderLeftColor: '4mm ridge #1e130c',
        borderRightColor: '4mm ridge #9a8478',
        borderTopColor: '4mm ridge #9a8478',
        borderBottomColor: '4mm ridge #1e130c',

        backgroundImage: "linear-gradient(rgb(154, 132, 120), rgb(30, 19, 12, .25))",
        navbarBackground: "#9a8478"
    },
    EarlyComputing: {
        foreground: "#94716B",
        background: "#B79891",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'white',

        borderLeftColor: '4mm ridge #94716B',
        borderRightColor: '4mm ridge #B79891',
        borderTopColor: '4mm ridge #94716B',
        borderBottomColor: '4mm ridge #B79891',

        backgroundImage: "linear-gradient(rgb(154, 132, 120), rgb(30, 19, 12, .25))",
        navbarBackground: "#B79891"
    },
    LGBTQ: {
        foreground: "rgba(70,0,255,0.47)",
        background: "#ffb5b2",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #fe0000',
        borderRightColor: '4mm ridge #ff6300',
        borderTopColor: '4mm ridge #008001',
        borderBottomColor: '4mm ridge #4600ff',

        backgroundImage: "linear-gradient(rgb(255, 181, 178, .8), rgb(131, 1, 137, .5))",
        navbarBackground: "#ffb5b2"
    },

    /* PLACEHOLDER THEMES */

    /* TODO FILL OUT */
    Women: {
        foreground: "#ffffff",
        background: "#ef9cd4",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #9779d3',
        borderRightColor: '4mm ridge #ef9cd4',
        borderTopColor: '4mm ridge #ef9cd4',
        borderBottomColor: '4mm ridge #9779d3',

        backgroundImage: "linear-gradient(rgb(239, 156, 212, 0.3), rgb(151, 121, 211, 0.7))",
        navbarBackground: "#ef9cd4"
    },
    POC: {
        foreground: "#000000",
        background: "#cdc1c1",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge #cdc1c1',
        borderRightColor: '4mm ridge #cdc1c1',
        borderTopColor: '4mm ridge #cdc1c1',
        borderBottomColor: '4mm ridge #cdc1c1',

        backgroundImage: "linear-gradient(#ffffff, #E2E2E2)",
        navbarBackground: "#cdc1c1"
    },
    ModernComputing: {
        foreground: "rgba(0, 62, 97, 0.6)",
        background: "rgba(255, 251, 247)",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge rgba(255, 251, 247)',
        borderRightColor: '4mm ridge rgba(0, 62, 97)',
        borderTopColor: '4mm ridge rgba(255, 251, 247)',
        borderBottomColor: '4mm ridge rgba(0, 62, 97)',

        backgroundImage: "linear-gradient(rgba(255, 251, 247, 0.8), rgba(0, 62, 97, 0.6))",
        navbarBackground: "rgba(0, 62, 97, 0.6)"
    },
    InformationAge: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    ImaginationAge: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    PC: { /* Change to PersonalComputing? */
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    Hardware: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    Software: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    // Space: {
    //     foreground: "#8d8bff",
    //     background: "#ddd6ff",
    //
    //     textColor: '#6666fa',
    //     textNavbarColor: '#6666fa',
    //     textFooterColor: '#6666fa',
    //     headerColor: '#08087c',
    //
    //     textEventColor: 'black',
    //
    //     borderLeftColor: '4mm ridge #9E73D3',
    //     borderRightColor: '4mm ridge #5C8BAD',
    //     borderTopColor: '4mm ridge #9E73D3',
    //     borderBottomColor: '4mm ridge #5C8BAD',
    //
    //     backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
    //     navbarBackground: "#8d8bff"
    // },
    // Mobile: {
    //     foreground: "#8d8bff",
    //     background: "#ddd6ff",
    //
    //     textColor: '#6666fa',
    //     textNavbarColor: '#6666fa',
    //     textFooterColor: '#6666fa',
    //     headerColor: '#08087c',
    //
    //     textEventColor: 'black',
    //
    //     borderLeftColor: '4mm ridge #9E73D3',
    //     borderRightColor: '4mm ridge #5C8BAD',
    //     borderTopColor: '4mm ridge #9E73D3',
    //     borderBottomColor: '4mm ridge #5C8BAD',
    //
    //     backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
    //     navbarBackground: "#8d8bff"
    // },
    // Automation: {
    //     foreground: "#8d8bff",
    //     background: "#ddd6ff",
    //
    //     textColor: '#6666fa',
    //     textNavbarColor: '#6666fa',
    //     textFooterColor: '#6666fa',
    //     headerColor: '#08087c',
    //
    //     textEventColor: 'black',
    //
    //     borderLeftColor: '4mm ridge #9E73D3',
    //     borderRightColor: '4mm ridge #5C8BAD',
    //     borderTopColor: '4mm ridge #9E73D3',
    //     borderBottomColor: '4mm ridge #5C8BAD',
    //
    //     backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
    //     navbarBackground: "#8d8bff"
    // },
    Gaming: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    Languages: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    AI: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    GeneralEntertainment: { /* TODO GET RID OF, OR CHANGE TO MISC? */
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    VR: {
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

        backgroundImage: "linear-gradient(rgb(69, 104, 220, .25), rgb(176, 106, 179, .5))",
        navbarBackground: "#8d8bff"
    },
    Culture: {
        foreground: "rgba(150, 120, 141, 0.8)",
        background: "rgba(220, 173, 112, 0.8)",

        textColor: '#000000',
        textNavbarColor: '#000000',
        textFooterColor: '#000000',
        headerColor: '#000000',

        textEventColor: 'black',

        borderLeftColor: '4mm ridge rgba(220, 173, 112, 0.8)',
        borderRightColor: '4mm ridge rgba(150, 120, 141, 0.8)',
        borderTopColor: '4mm ridge rgba(220, 173, 112, 0.8)',
        borderBottomColor: '4mm ridge rgba(150, 120, 141, 0.8)',

        backgroundImage: "linear-gradient(rgba(220, 173, 112, 0.8), rgba(150, 120, 141, 0.8))",
        navbarBackground: "rgba(220, 173, 112, 0.8)"
    }
};

export const ThemeStyles = React.createContext(themes.Vaporwave);
export default themes;

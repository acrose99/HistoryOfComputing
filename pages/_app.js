import '../styles/globals.css'

import React from 'react'
import App from 'next/app'
import {ThemeStyles, themes} from '../context/themeStyles';

export default class Application extends App {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.Vaporwave,
        };
        this.toggleTheme = (themeGiven) => {
            this.setState(({
                theme: themes[themeGiven]
            }));
        };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <ThemeStyles.Provider value={this.state.theme}>
                    <Component toggleTheme={this.toggleTheme} {...pageProps} />
                </ThemeStyles.Provider>
            </div>
        );
    }
}

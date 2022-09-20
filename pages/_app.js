import '../styles/globals.css'
import 'normalize.css'
import React from 'react'
import App from 'next/app'
import { ThemeStyles, themes } from '../context/themeStyles';
import { ThemeProvider } from 'next-themes'

export default class Application extends App {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.Vaporwave,
        };
        this.toggleTheme = (themeGiven) => {
            this.setState(({
                theme: themes[ themeGiven ]
            }));
        };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider attribute="class" >
                <Component toggleTheme={this.toggleTheme} {...pageProps} />
            </ThemeProvider>
        );
    }
}

import React from 'react';
import {ThemeStyles, themes} from './themeStyles';

class AppWrapper extends React.Component{
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
    render () {
        return (
            <ThemeStyles.Provider toggleTheme={this.t} value={this.state.theme}>
                {this.props.children}
            </ThemeStyles.Provider>
        );
    }
}
export default AppWrapper

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Team from "./container/Team";
import Home from "./container/Home";
import TimelineContainer from "./container/TimelineContainer";
import {ThemeStyles, themes} from './themeStyles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.Vaporwave,
        };

        this.toggleTheme = (themeGiven) => {
            if (themeGiven === 'RetroApple' || themeGiven === 'retroapple' || themeGiven === 'Apple' || themeGiven === 'apple') {
                this.setState(state => ({
                    theme: themes.Apple
                }));
            }
            else if (themeGiven === 'Vaporwave' || themeGiven === 'vaporwave') {
                this.setState(state => ({
                    theme: themes.Vaporwave
                }));
            }
            else if (themeGiven === 'IBM' || themeGiven === 'ibm') {
                this.setState(state => ({
                    theme: themes.IBM
                }));
            }
            else if (themeGiven === 'Microsoft' || themeGiven === 'microsoft') {
                this.setState(state => ({
                    theme: themes.Microsoft
                }));
            }
            else {
                this.setState(state => ({
                    theme: themes.Vaporwave
                }));
            }
        };
    }
    render() {
        return (
            <ThemeStyles.Provider value={this.state.theme}>
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home toggleTheme={this.toggleTheme} />
                        </Route>
                        <Route path="/homeNormal">
                            <Home toggleTheme={this.toggleTheme} />
                        </Route>
                        <Route path="/team">
                            <Team toggleTheme={this.toggleTheme} />
                        </Route>
                        <Route path="/timeline">
                            <TimelineContainer theme={this.state.theme} toggleTheme={this.toggleTheme} />
                        </Route>
                    </Switch>
                </Router>
            </ThemeStyles.Provider>
        )
    }
}

export default App;

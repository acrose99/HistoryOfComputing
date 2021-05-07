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
            else if (themeGiven === 'Ancient' || themeGiven === 'Ancient') {
                this.setState(state => ({
                    theme: themes.Ancient
                }));
            }
            else if (themeGiven === 'Medieval' || themeGiven === 'Medieval') {
                this.setState(state => ({
                    theme: themes.Medieval
                }));
            }
            else if (themeGiven === 'Enlightenment' || themeGiven === 'Enlightenment') {
                this.setState(state => ({
                    theme: themes.Medieval
                }));
            }
            else if (themeGiven === 'EarlyComputing') {
                this.setState(state => ({
                    theme: themes.EarlyComputing
                }));
            }
            else if (themeGiven === 'Industrial' || themeGiven === 'Industrial') {
                this.setState(state => ({
                    theme: themes.Industrial
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
                        <Route path="/team">
                            <Team toggleTheme={this.toggleTheme} />
                        </Route>
                        <Route path="/timeline">
                            <TimelineContainer theme={this.state.theme} toggleTheme={this.toggleTheme} />
                        </Route>
                        <Route path="/">
                            <Home toggleTheme={this.toggleTheme} />
                        </Route>
                    </Switch>
                </Router>
            </ThemeStyles.Provider>
        )
    }
}

export default App;

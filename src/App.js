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
                this.setState(({
                    theme: themes[themeGiven]
                }));
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

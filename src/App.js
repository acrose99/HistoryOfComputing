// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "./container/Home98.css"
// import "98.css"
// import Timeline from "./container/Timeline";
//
// /* Credit for the majority of the CSS goes to Jordan Scales!!!!
//         https://jdan.github.io/98.css/?ref=blogduwebdesign.com
//         It is distributed under the MIT Licence
//         I did some more work, slightly for browser compatibility, and so that the scrollbars are kept to the default.
//         That work was on import "../98.css/style.css".
//         If you wanna see exactly what I did just compare the changes from the OG file to my own.
//  */
//
//
//
// const Home = () => (
//     <Router basename='/historycomp'>
//             <Route  path="/timeline" component={timeline} />
//         </div>
//     </Router>
// );
// // const Topics = ({ match }) => (
// //     <div>
// //         <h2>Topics</h2>
// //         <ul>
// //             <li>
// //                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
// //             </li>
// //             <li>
// //                 <Link to={`${match.url}/components`}>Components</Link>
// //             </li>
// //             <li>
// //                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
// //             </li>
// //         </ul>
// //
// //         <Route path={`${match.url}/:topicId`} component={Topic} />
// //         <Route
// //             exact
// //             path={match.url}
// //             render={() => <h3>Please select a topic.</h3>}
// //         />
// //     </div>
// // );
// //
// // const Topic = ({ match }) => (
// //     <div>
// //         <h3>{match.params.topicId}</h3>
// //     </div>
// // );
//
// export default Home;

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Team from "./container/Team";
import Home from "./container/Home";
import TimelineContainer from "./container/TimelineContainer";
import {ThemeContext, themes} from './theme-context';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.Vaporwave,
        };

        this.toggleTheme = (themeGiven) => {
            if (themeGiven === 'RetroApple' || themeGiven === 'retroapple') {
                this.setState(state => ({
                    theme: themes.RetroApple
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
            <ThemeContext.Provider value={this.state.theme}>
                <Router basename='/HistoryOfComputing'>
                    <Switch>
                        <Route path="/home">
                            <Home toggleTheme={this.toggleTheme} />/>
                        </Route>
                        <Route path="/homeNormal">
                            <Home toggleTheme={this.toggleTheme} />/>
                        </Route>
                        <Route path="/team">
                            <Team toggleTheme={this.toggleTheme} />/>
                        </Route>
                        <Route path="/timeline">
                            <TimelineContainer toggleTheme={this.toggleTheme} />
                        </Route>
                    </Switch>
                </Router>
            </ThemeContext.Provider>
        )
    }
}

export default App;

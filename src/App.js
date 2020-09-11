import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

class App extends React.Component {
  //made App into a stateful function bc thats the tradition and it allows u to return stateful and stateless functions into main page
  render() {
    return (
      <div className="App-container">
        <Routes appProps={{}} />
        <a href="/" className="movable-icon">
          {" "}
          <i className="fa fa-align-justify" />{" "}
        </a>
      </div>
    );
  }
}

export default withRouter(App);

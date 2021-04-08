import React, {Component} from "react";
import "./Home.css";


//Material-UI imports is placeholder until we create our own, probably in a few days.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
class Home extends Component {
    constructor(props) {
        super(props);
        this.props.toggleTheme('Vaporwave');
    }
    render() {
        return (
            <div>
                <div className="Home-container">
                    <Navbar/>
                    <div className="Home-media">
                    </div>
                    <h1  className="Home-content">
                        The History of Computing!
                    </h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Home

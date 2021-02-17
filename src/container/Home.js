import React, {Component} from "react";
import "./Home.css";


//Material-UI imports is placeholder until we create our own, probably in a few days.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Home extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            src: require('../images/Mac128hello.svg')
        }
    }
    render() {
        return (
            <div>
                <div className="Home-container">
                    <Navbar/>
                    <div>
                        <img className="Home-media" onMouseLeave={() => this.setState({src: require('../images/Mac128hello.svg')})} onMouseEnter={() => this.setState({src: require('../images/Mac128world.svg')})} src={this.state.src} alt="MacHello"/>
                    </div>
                    <h1   className="Home-content">
                        The History of Computing!
                    </h1>
                </div>
                {/*<Routes/>*/}
                <Footer/>
            </div>
        )
    }
}
export default Home

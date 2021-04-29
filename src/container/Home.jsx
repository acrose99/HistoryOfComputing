import React, {Component} from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MacHello from "../images/buttons/Mac128hello.png"
import MacWorld from "../images/buttons/Mac128world.png"
import {themes} from '../themeStyles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: MacHello
        }
        this.onMacHover = this.onMacHover.bind(this);
        this.onMacLeave = this.onMacLeave.bind(this);
    }
    onMacHover() {
        this.setState({
            src: MacWorld
        });
    }
    onMacLeave() {
        this.setState({
            src: MacHello
        });
    }
    render() {
        return (
                <div className="Home-container" style={{background: themes.Vaporwave.background}}>
                    <Navbar/>
                    <div className="Home-content">
                        <img id="macHome" onMouseEnter={() => this.onMacHover} onMouseLeave={this.onMacLeave}  src={this.state.src} alt="MacHello"/>
                        <h1 style={{color: themes.Vaporwave.headerColor}}>
                            Welcome to The History of Computing!
                        </h1>
                        <p style={{color: themes.Vaporwave.textColor}}>
                            We recommend you first go to the timeline by using the navigation menu above.
                        </p>
                    </div>
                    <Footer/>
                </div>
        )
    }
}
export default Home

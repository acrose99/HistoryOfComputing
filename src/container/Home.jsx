import React, {Component} from "react";
import "./Home.css";
import Footer from "../components/Footer";
import HomeImg from "../images/HistOfComputingHome.svg"
import Background from "../images/background.svg"
import { Link } from "react-router-dom";
import {ThemeStyles} from '../themeStyles';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowBig: true,
        }
    }


    updateMenuStyle() {
        // if the width is less than 768, it goes into small menu
        if (window.innerWidth < 768) {
            this.setState({ windowBig: false, });
        }
        else {
            this.setState({ windowBig: true, });
        }
    }

    componentDidMount() {
        this.updateMenuStyle();
        window.addEventListener("resize", this.updateMenuStyle.bind(this));
    }
    componentWillUnmount() {
        // tutorial said i should unmount the event listener so here it is
        window.removeEventListener("resize", this.updateMenuStyle.bind(this));
    }
    render() {
        let theme = this.context;
        if (this.state.windowBig === false) {
            return (
                <div className="Home-content-mobile">
                    {/*<Navbar/>*/}
                    <img id="homeImgMobile"  src={HomeImg} alt="Intro"/>
                    <div className="heroText">
                        <h1 style={{fontSize: '38px'}} className="heroHeader">
                            Welcome to The History of Computing!
                        </h1>
                        <div className="home-btn-wrapper">
                            <Link className="home-btn" to="/timeline">See the timeline</Link>
                        </div>
                    </div>
                    {/*<Footer/>*/}
                    {/*<div style={{display: "flex", flexGrow: 1, backgroundColor: theme.background }}>*/}
                    {/*</div>*/}
                </div>
            )
        }
       else return (
                    <div style={{background: `url(${Background})`, backgroundSize: 'cover'}} className="Home-content">
                        {/*<Navbar/>*/}
                        <div className="hero">
                            <div className="heroText">
                                <h1 className="heroHeader">
                                    Welcome to The History of Computing!
                                </h1>
                                <div className="home-btn-wrapper">
                                    <Link className="home-btn" to="/timeline">See the timeline</Link>
                                </div>
                            </div>
                            <img id="homeImg"  src={HomeImg} alt="Intro"/>
                        </div>
                        <Footer/>
                        <div style={{display: "flex", flexGrow: 1, backgroundColor: theme.background }}>
                        </div>
                    </div>
        )
    }
}
Home.contextType = ThemeStyles;
export default Home

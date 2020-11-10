import React, { Component } from "react";
import "./Navbar.css";


export default class Navbar extends Component {

    // big = over 700px width. mini = less than 700 width
    constructor() {

        super();
        this.state = {
            windowBig: true,
        }
    }


    updateMenuStyle() {

        if (window.innerWidth < 700) {
            this.setState({ windowBig: false, });
            // if window is smaller
            // <div>
            //     <p>booh</p>
            // </div>

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
        return (
            <div>
                {
                    // this is a good old fashioned JS ternary expression. if window big is true it returns one div. if it is not big than it will return another div
                    this.state.windowBig === true ?

                        <div id="bigMenu">
                            <div id="top-container">
                                <h2 class="title">The History Of Computing</h2>
                                <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />

                            </div>
                            <div id="bottom-container">
                                <button class="menuItem">The Timeline</button>
                                <button class="menuItem">The Book</button>
                                <button class="menuItem">About Us</button>
                                <button class="menuItem">SSL</button>
                                <button class="menuItem"><img class="menuImg" src={require("../images/github.svg")} /></button>

                            </div>
                        </div>

                        :
                        // if it is false
                        <div id="smallMenu">
                            <div id="top-container">
                                <h2 class="title">The History Of Computing</h2>
                                <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />

                            </div>

                        </div>
                }
            </div>
        );


    }
}
    //     return (
    //         // if window is bigger
    //         <div id="Nav-container">

                    //             {/* if(state.mediaSize == true) ? */}
/* //             <div id="top-container"> *
                         <h2 class="title">The History Of Computing</h2>
//                 <img className="Nav-icon" src={require("../images/artificial-intelligence.png")} alt="" />

//             </div>
//             <div id="bottom-container">
        //                 <button class="menuItem">The Timeline</button>
//                 <button class="menuItem">The Book</button>
//                 <button class="menuItem">About Us</button>
//                 <button class="menuItem">SSL</button>
//                 <button class="menuItem"><img class="menuImg" src={require("../images/github.svg")} /></button>

//             </div>
//         </div>
//     )
// }//end if */


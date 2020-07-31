import React, {useEffect, useState} from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/Navbar";
export default function Home() {
    return (
        <div>
            <Navbar/>
            <div className="Home-container">
                <div className="Home-media">
                    <img className="Home-media1" src={require("../images/ai.png")}/>
                    <img className="Home-media2" src={require("../images/artificial-intelligence.png")}/>
                </div>
                <Typography className="Home-content" gutterBottom color="primary" variant="h1" component="h1">
                    The History of Computing!
                </Typography>
                <div className="Home-buttoncontainer">
                    <Button className="Home-Home98link" href="/" color="primary"  variant="contained" size="large">
                        <Typography color="inherit" align="center" variant="h6">
                            Click here for the Windows 98 themed homepage.
                        </Typography>
                    </Button>
                </div>
            </div>
            {/*<Routes/>*/}
        </div>
    )
}
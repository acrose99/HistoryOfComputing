import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import Routes from "../Routes";
import "./Home.css"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function Home() {
    return (
        <div className="App-container">
            <div>
                <div className="media">
                    <img className="media1" src={require("../images/ai.png")}/>
                    <img className="media2" src={require("../images/artificial-intelligence.png")}/>
                </div>
                <div className="buttoncontainer">
                    <Button href="/team" className= "button" color="primary" variant="contained" size="large">
                        <Typography className="content"  color="inherit" align="center" variant="h6">
                            A Historiography of <i> The History of Computing and Its Cultures </i>
                        </Typography>
                    </Button>
                </div>
            </div>
            {/*<Routes/>*/}
        </div>
    )
}
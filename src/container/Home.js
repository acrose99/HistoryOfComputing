import React, {useEffect, useState} from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function Home() {
    return (
        <div className="App-container">
            <div>
                <div id="media">
                    <img id="media1" src={require("../images/ai.png")}/>
                    <img id="media2" src={require("../images/artificial-intelligence.png")}/>
                </div>
                <div  id="buttoncontainer">
                    <Button href="/timeline" color="primary" className= "button"  variant="contained" size="large">
                        <Typography id="contentHome"  color="inherit" align="center" variant="h6">
                            A Historiography of <i> The History of Computing and Its Cultures </i>
                        </Typography>
                    </Button>
                </div>
                <div id="buttoncontainer">
                    <Button href="/team" color="primary" className= "button"  variant="contained" size="large">
                        <Typography id="contentHome"  color="inherit" align="center" variant="h6">
                            Our Team
                        </Typography>
                    </Button>
                </div>
            </div>
            {/*<Routes/>*/}
        </div>
    )
}
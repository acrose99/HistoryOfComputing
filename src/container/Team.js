import './Team.css';
import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from "../components/Navbar";

export default function Team() {

    //Todo Refactor the crap out of this and Add Alex Crane to credits
    const media = {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 0,
        height: '50%',
        width: '100%',
        position: 'relative',
    }
    const typography = {
        fontFamily: 'Chicago',
        fontSize: 15,
    }
    const typographyGeorge = {
        fontFamily: 'Chicago',
        fontSize: 17,
    }
    return (
        <div>
            <Navbar/>
            <div className="Team-Container">
                <Card className="Team-teammate">
                    <CardMedia style={media}
                               className="Team-media"
                        title="George"
                        image={require("../images/gkt.jpg")}
                    />
                    <CardContent>
                        <Typography  style={typography} gutterBottom color="primary" variant="h4" component="h4">
                            George K. Thiruvathukal
                        </Typography>
                        <Typography style={typography} gutterBottom color="textPrimary" variant="h5" component="h5">
                            Writer (Technical History)
                        </Typography>
                        <Typography style={typographyGeorge} className="Team-content" variant="body2" color="textSecondary" component="p">
                            Hi! I’m George K. Thiruvathukal. I’m professor of computer science at Loyola University Chicago and visiting faculty at Argonne National Laboratory.
                        </Typography>
                    </CardContent>
                    <CardActions className="Team-georgeLinks" >
                        <Button style={typography} className="Team-link1" variant='outlined' size="large" color="primary" href="https://www.luc.edu/cs/people/ftfaculty/gkt.shtml">
                            Faculty Page
                        </Button>
                        <Button style={typography} className="Team-link2" variant='outlined' size="large" color="primary" href="https://thiruvathukal.com/">
                            Personal Website
                        </Button>
                    </CardActions>
                </Card>
                <Card className="Team-teammate">
                    <CardMedia style={media}
                               className="Team-media"
                        title="David"
                        image={require("../images/ddennis.jpg")}
                    />
                    <CardContent>
                        <Typography  style={typography} gutterBottom color="primary" variant="h4" component="h4">
                            David Dennis
                        </Typography>
                        <Typography style={typography} gutterBottom color="textPrimary" variant="h5" component="h5">
                            Writer (Cultural History)
                        </Typography>
                        <Typography style={typography} className="Team-content" variant="body2" color="textSecondary" component="p">
                            David B. Dennis (Ph.D., UCLA, 1991; B.A., University of Wisconsin, 1984) is a Professor of History at Loyola University Chicago where he teaches courses on Western Humanities, Modern European Cultural and Intellectual History, and the Cultural History of Computing.
                        </Typography>
                    </CardContent>
                    <CardActions className="Team-dennisLinks">
                        <Button style={typography} className="Team-link1" variant='outlined' size="large" color="primary" href="https://www.luc.edu/history/people/facultyandstaffdirectory/dennisdavidb.shtml">
                            Faculty Page
                        </Button>
                        <Button style={typography} className="Team-link2" variant='outlined' size="large" color="primary" href="https://sites.google.com/a/etl.luc.edu/dbd/Home-Page">
                            Personal Website
                        </Button>
                    </CardActions>
                </Card>
                <Card className="Team-teammate">
                    <CardMedia style={media}
                               className="Team-media"
                        title="Alex"
                        color="textPrimary"
                        image={require("../images/alex3.jpeg")}
                    />
                    <CardContent>
                        <Typography style={typography} gutterBottom color="primary" variant="h4" component="h4">
                            Alex Rose
                        </Typography>
                        <Typography style={typography} gutterBottom color="textPrimary"  variant="h5" component="h5">
                            Programmer/Editor
                        </Typography>
                        <Typography style={typography} className="content" variant="body2" color="textSecondary" component="p">
                            I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the
                            Software
                            Systems Laboratory and the VP of the Don't Panic CS Club. Finally, I work as a IT Technician for the Loyola Service Desk
                        </Typography>
                    </CardContent>
                    <CardActions className="Team-alexLinks">
                        <Button style={typography} className="Team-link1" variant='outlined' size="large" color="primary" href="https://github.com/acrose99">
                            Github
                        </Button>
                        <Button style={typography} className="Team-link2"  variant='outlined' size="large" color="primary" href="https://github.com/acrose99">
                            Don't Panic
                        </Button>
                    </CardActions>
                </Card>
              </div>
            </div>

    );
}


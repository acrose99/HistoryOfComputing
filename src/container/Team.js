import './Team.css';
import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Team() {
    return (
        <div className="root">
            <Card className="teammate">
                <CardMedia
                    className="media"
                    title="George"
                    image={require("../images/gkt.jpg")}
                />
                <CardContent>
                    <Typography gutterBottom color="primary" variant="h4" component="h4">
                        George K. Thiruvathukal
                    </Typography>
                    <Typography gutterBottom color="textPrimary" variant="h5" component="h5">
                        Writer (Technical History)
                    </Typography>
                    <Typography className="content" variant="body2" color="textSecondary" component="p">
                        Hi! I’m George K. Thiruvathukal. I’m professor of computer science at Loyola University Chicago and visiting faculty at Argonne National Laboratory.
                    </Typography>
                </CardContent>
                <CardActions className="links" >
                    <Button className="link1" variant='outlined' size="large" color="primary" href="https://github.com/MatthewLoffredo">
                        Faculty Page
                    </Button>
                    <Button className="link2" variant='outlined' size="large" color="primary" href="https://github.com/MatthewLoffredo">
                        Personal Website
                    </Button>
                </CardActions>
            </Card>
            <Card className="teammate">
                <CardMedia
                    className="media"
                    title="David"
                    image={require("../images/ddennis.jpg")}
                />
                <CardContent>
                    <Typography gutterBottom color="primary" variant="h4" component="h4">
                        David Dennis
                    </Typography>
                    <Typography gutterBottom color="textPrimary" variant="h5" component="h5">
                        Writer (Cultural History)
                    </Typography>
                    <Typography className="content" variant="body2" color="textSecondary" component="p">
                        David B. Dennis (Ph.D., UCLA, 1991; B.A., University of Wisconsin, 1984) is a Professor of History at Loyola University Chicago where he teaches courses on Western Humanities, Modern European Cultural and Intellectual History, and the Cultural History of Computing.
                    </Typography>
                </CardContent>
                <CardActions className="links">
                    <Button className="link1" variant='outlined' size="large" color="primary" href="https://github.com/Iqra2124">
                        Faculty Page
                    </Button>
                    <Button className="link2" variant='outlined' size="large" color="primary" href="https://github.com/MatthewLoffredo">
                        Personal Website
                    </Button>
                </CardActions>
            </Card>
            <Card className="teammate">
                <CardMedia
                    className="media"
                    title="Alex"
                    color="textPrimary"
                    image={require("../images/alex.jpg")}
                />
                <CardContent>
                    <Typography gutterBottom color="primary" variant="h4" component="h4">
                        Alex Rose
                    </Typography>
                    <Typography gutterBottom color="textPrimary" variant="h4" variant="h5" component="h5">
                        Programmer/Editor
                    </Typography>
                    <Typography className="content" variant="body2" color="textSecondary" component="p">
                        I'm a sophomore studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the
                        Software
                        Systems Laboratory and the VP of the Don't Panic CS Club. Finally, I work as a IT Technician for the Loyola Service Desk
                    </Typography>
                </CardContent>
                <CardActions className="links">
                    <Button  className="link1" variant='outlined' size="large" color="primary" href="https://github.com/acrose99">
                        Github
                    </Button>
                    <Button  className="link2"  variant='outlined' size="large" color="primary" href="https://github.com/acrose99">
                        Don't Panic
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}


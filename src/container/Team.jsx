import "../components/Teammate.css";
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Teammate from "../components/Teammate";
import Footer from "../components/Footer";
// image imports
import AlexRoseImg from "../images/team/alex.jpeg";
import AlexCraneImg from "../images/team/alexC.jpg";
import jackImg from "../images/team/jack.png";
import georgeImg from "../images/team/gkt.jpg";
import dennisImg from "../images/team/ddennis.jpg";
import './Team.css'

//TODO Change based on context
class Team extends Component{
    // const theme = useContext(ThemeStyles);
    constructor(props) {
        super(props);
        this.props.toggleTheme('Vaporwave');
    }
    render () {
        return (
            <div>
                <Navbar/>
                <div id="Team-Container">
                    <Teammate
                        image={AlexRoseImg}
                        name="Alex Rose"
                        alt="Alex"

                        role="Lead Programmer"
                        bio="I'm a Rising Senior studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the Software Systems Laboratory and the VP of the Don't Panic CS Club. I like web development and scripting"
                        links={[
                                    ["Github", "https://github.com/acrose99"],
                                    [
                                        "Personal Website",
                                        "https://acrose99.github.io/PersonalWebsite/",
                                    ],
                                ]}
                                fav="Macintosh128k"
                            />

                            <Teammate
                                image={AlexCraneImg}
                                name="Alex Crane"
                                alt="Alex"

                                role="Programmer"
                                bio=" I'm Alex Crane and I am a senior Software Engineering major at Loyola. I am an active member of Alpha Phi Omega. I like web development and Object-Oriented programming."
                                links={[
                                    ["Github", "https://github.com/alexandratcrane"],
                                    ["LinkedIn", "https://www.linkedin.com/in/alexandra-crane/"],
                                ]}
                                fav="Java"
                            />
                    <Teammate image={jackImg} name="Jack Narowski" role="Programmer"
                              bio="Jacob Narowski is a Software Engineering student at Loyola University. He is specifically interested in research, integrated software, and micro-computers."
                              links={[["Github", "https://github.com/JackNarowski"], ["Personal Website", "https://jacknarowski.com/"]]}
                              alt="Jack"

                              fav="React"
                    >
                    </Teammate>
                    <Teammate
                        image={georgeImg}
                        alt="George"
                        name="George K. Thiruvathukal"
                        role="Writer (Technical History)"
                        bio="Hi! I’m George K. Thiruvathukal. I’m professor of computer science at Loyola University Chicago and visiting faculty at Argonne National Laboratory."
                        links={[
                            [
                                "Faculty Page",
                                "https://www.luc.edu/cs/people/ftfaculty/gkt.shtml",
                            ],
                                    ["Personal Website", "https://thiruvathukal.com"],
                                ]}
                                fav="Ubuntu Linux"
                            />

                            <Teammate
                                image={dennisImg}
                                name="David Dennis"
                                role="Writer (Cultural History)"
                                bio=" David B. Dennis (Ph.D., UCLA, 1991; B.A., University of Wisconsin, 1984) is a Professor of History at Loyola University Chicago where he teaches courses on Western Humanities, Modern European Cultural and Intellectual History, and the Cultural History of Computing."
                                links={[
                                    [
                                        "Faculty Page",
                                        "https://www.luc.edu/history/people/facultyandstaffdirectory/dennisdavidb.shtml",
                                    ],
                                    [
                                        "Personal Website",
                                        "https://sites.google.com/a/etl.luc.edu/dbd/Home-Page",
                                    ],
                                ]}
                                fav="Books"
                            />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Team

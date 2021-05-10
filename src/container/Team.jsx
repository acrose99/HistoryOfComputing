import "../components/Teammate.css";
import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Teammate from "../components/Teammate";
import Footer from "../components/Footer";
// image imports
import AlexRoseImg from "../images/team/alex.jpeg";
import AlexCraneImg from "../images/team/alexC.jpg";
import jackImg from "../images/team/jack.png";
// import georgeImg from "../images/team/gkt.jpg";
// import dennisImg from "../images/team/ddennis.jpg";
import '../components/Team.css'

//TODO UI Overhaul
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

                        role="Lead Programmer and Writer"
                        bio="I'm a Senior studying Computer Science at Loyola, although I am only taking one class my last year. I'm also a Mulcahy Fellow at the Software Systems Laboratory and the VP of the Don't Panic CS Club. I like web development."
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
                </div>
                <Footer />
            </div>
        );
    }
}
export default Team

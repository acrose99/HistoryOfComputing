import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Teammate from "../components/Teammate";
import Footer from "../components/Footer";

import styles from '../styles/Team.module.css'

//TODO UI Overhaul
class Team extends Component{
    // const theme = useContext(ThemeStyles);
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <Navbar/>
                <div className={styles.TeamContainer}>
                    <Teammate
                        image='/images/team/alex.jpeg'
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
                        image={'/images/team/alexC.jpg'}
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
                    <Teammate   image='/images/team/jack.png'
                                                      name="Jack Narowski" role="Programmer"
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

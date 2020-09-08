import './Team.css';
import React from "react";
import Navbar from "../components/Navbar";
import Teammate from "../components/Teammate";

export default function Team() {

    //Todo Refactor the crap out of this and Add Alex Crane to credits
    return (
        <div>
            <Navbar/>
            <div id="Team-Container">
                <div className="Team-Row" >
                    <Teammate image={require("../images/alex2.jpeg")} name="Alex Rose" role="Lead Programmer"
                              bio="I'm a Junior studying Computer Science at Loyola. I'm also a Mulcahy Fellow at the Software Systems Laboratory and the VP of the Don't Panic CS Club. I like web development and scripting"
                              links={[["Github", "https://github.com/acrose99"], ["Personal Website","https://acrose99.github.io/PersonalWebsite/" ]]}
                              fav="Macintosh128k"
                    >
                    </Teammate>
                    <Teammate image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0f%2FDouble_Trouble_(4919788838).jpg%2F1200px-Double_Trouble_(4919788838).jpg&f=1&nofb=1" name="Alex Crane" role="Programmer"
                              bio="Alex Crane is a Junior studying Computer Science at Loyola. She works as an ITS Service Desk Technician. She likes web development too!"
                              links={[["Github", "https://github.com/alexandratcrane"], ["ITS","https://www.luc.edu/its/service/" ]]}
                              fav="Java"
                    >
                    </Teammate>
                </div>
                <div className="Team-Row">
                    <Teammate image={require("../images/gkt.jpg")} name="George K. Thiruvathukal" role="Writer (Technical History)"
                              bio="Hi! I’m George K. Thiruvathukal. I’m professor of computer science at Loyola University Chicago and visiting faculty at Argonne National Laboratory."
                              links={[["Faculty Page", "https://www.luc.edu/cs/people/ftfaculty/gkt.shtml"], ["Personal Website","https://thiruvathukal.com" ]]}
                              fav="Ubuntu Linux"
                    >
                    </Teammate>
                    <Teammate image={require("../images/ddennis.jpg")} name="David Dennis" role="Writer (Cultural History)"
                              bio=" David B. Dennis (Ph.D., UCLA, 1991; B.A., University of Wisconsin, 1984) is a Professor of History at Loyola University Chicago where he teaches courses on Western Humanities, Modern European Cultural and Intellectual History, and the Cultural History of Computing."
                              links={[["Faculty Page", "https://www.luc.edu/history/people/facultyandstaffdirectory/dennisdavidb.shtml"], ["Personal Website","https://sites.google.com/a/etl.luc.edu/dbd/Home-Page" ]]}
                              fav="Books"
                    >
                    </Teammate>
                </div>
              </div>
            </div>
    );
}


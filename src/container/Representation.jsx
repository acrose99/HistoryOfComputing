import React from "react";
function Representation() {
    let email = <a href="mailto:acrosemail@gmail.com"> or email me.</a>
    return (
        <div style={{ textAlign: "center", width: "80%", margin: '0 auto'}}>
            <h2>Statement on Representation:</h2>
            <p>I, Alex Rose, the author of this website's historical content, want to emphasize how important it is to accurately represent historically underprivileged groups, within the field of History of Computing, and in society itself. Computer Science specifically is woefully lacking in diversity.</p>
            <p>
                Specifically, I have tried to highlight contributions of Women, People of Color, and LGBTQ+ individuals.
            </p>
            <p>
                I have tried to best represent these groups significance to the History of Computing, however I am not an a POC/Woman, a historian, or an expert on these issues. If you have any suggestions and/or issues with the content on this website please file an Issue on Github, {email}
            </p>
        </div>

    )
}
export default Representation

// TODO: Download all the images so that the page loads faster
// TODO: Try working on text alignment
// TODO: Keep the timeline separator's width the same



import React, {useEffect, useState} from "react";
import "./Timeline.css"
import Navbar from "../components/Navbar";
import Event from "../components/Event";
import Footer from "../components/Footer";
export default function Timeline() {


    return (
        <div id="Timeline">
            <Navbar/>
            <h1 id="Timeline-header">The History of Computing</h1>
            {/*<div id="Timeline-separator">*/}

            {/*</div>*/}
            <h2 id="Timeline-intro">Important events that summarize the History of Computing.</h2>
            <Event id="Z1" date="1941" location="Berlin, Germany" title="Konrad Zuse finishes the Z3 computer"
                image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhistory-computer.com%2FModernComputer%2FRelays%2Fimages%2FZuse_Z3.jpg&f=1&nofb=1"}
            />
            <Event date="August 7. 1944" location="Cambridge, US" title="Harvard Mark 1 is completed"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F11%2FHarvard_Mark_I_Computer_-_Left_Segment.jpg%2F1200px-Harvard_Mark_I_Computer_-_Left_Segment.jpg&f=1&nofb=1"}
            />
            <Event date="1962" location="Cambridge, US" title="MIT LINC is introduced"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Vn15KIpxZlnaG6ALBzwL1QHaFT%26pid%3DApi&f=1"}
            />
            <Event date="1964" location="New York, US" title="SABRE comes on-line"
                   image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.computerhistory.org%2Ftimeline%2Ftimeline_networking.web_1964_sabre.jpg&f=1&nofb=1"}
            />
            <Event date="1972" location="Palo Alto, US" title="Hewlett Packard introduces the HP-35"
                   image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.codex99.com%2Fdesign%2Fimages%2Fhp%2Fbrochure_73_lg.jpg&f=1&nofb=1"}
            />
            <Event date="1973" location="LOS Gatos, US" title="IBM Scamp is created"
                   image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.computerhistory.org%2Ftimeline%2FScamp.png&f=1&nofb=1"}
            />
            <Event date="June 1977" location="Cupertino, US" title="Apple II introduced"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F82%2FApple_II_tranparent_800.png&f=1&nofb=1"}
            />
            <Event date="Feburary 24, 1982" location="Menlo Park, US" title="Sun Microsystems is founded"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleshayman.files.wordpress.com%2F2012%2F09%2Fsun_microsystems.jpg&f=1&nofb=1"}
            />
            <Event date="August 1982" location="Toronto Canada, US" title="Commodore introduces the Commodore 64"
                   image={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/3_versioner_av_c64_%28modified%29.jpg/800px-3_versioner_av_c64_%28modified%29.jpg"}
            />
            <Event date="January 24, 1984" location="Cupertino, US" title="Apple launches the Macintosh"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe3%2FMacintosh_128k_transparency.png&f=1&nofb=1"}
            />
            <Event date="September 1988" location="Palo Alto, US" title="Steve Jobs and NeXt create the NeXTcube"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F27%2FNeXTcube.jpg%2F1200px-NeXTcube.jpg&f=1&nofb=1"}
            />
            <Event date="May 8, 1993" location="Cupertino, US" title="Apple Newton is released"
                   image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.notebookcheck.net%2Ffileadmin%2FNotebooks%2FNews%2F_nc3%2Fnewton_full_open_l.jpg&f=1&nofb=1"}
            />
            <Event date="1996" location="Palo Alto, US" title="IBM releases the ThinkPad 701C"
                   image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.complex.com%2Fcomplex%2Fimage%2Fupload%2Fc_limit%2Cw_680%2Ffl_lossy%2Cpg_1%2Cq_auto%2Fnni61aadu9kvojsgjse5.jpg&f=1&nofb=1"}
            />
            <Event  date="June 29, 2007" location="Cupertino, US" title="The iPhone is released"
                    image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FIPhone_1st_Gen.svg%2F1200px-IPhone_1st_Gen.svg.png&f=1&nofb=1"}
            />
            <Event  date="April 3, 2010" location="Cupertino, US" title="The Apple iPad is released"
                    image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F5c%2FIPad_1_PSD_Mockup.png%2F1200px-IPad_1_PSD_Mockup.png&f=1&nofb=1"}
            />
            <Event  date="Feburary 2012" location="Germany" title="Raspberry Pi Model B is released"
                    image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff1%2FRaspberry_Pi_4_Model_B_-_Side.jpg%2F1200px-Raspberry_Pi_4_Model_B_-_Side.jpg&f=1&nofb=1"}
            />
            <Event  date="July 15, 2015" location="Redmond, US" title="Windows 10 is released"
                    image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftr2.cbsistatic.com%2Fhub%2Fi%2Fr%2F2015%2F03%2F25%2Fb06b7a00-711d-4803-a242-58279f992dc4%2Fresize%2F770x%2F381743adbbb46266227661b832c6df8e%2Fwin10.png&f=1&nofb=1"}
            />
            <Event  date="June 5, 2019" location="Cupertino, US" title="The Apple Pro Stand is released"
                    image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-prod.adage.com%2Fs3fs-public%2Fstyles%2Fwidth_1024%2Fpublic%2F20190602_apple_pro_stand_3x2.jpg&f=1&nofb=1"}
            />
            <Footer/>
        </div>
    )
}
import React, {useEffect, useState} from "react";
import "./Timeline.css";
import Navbar from "../components/Navbar";

export default function Timeline() {
    return (
        <div className="App-container">
            <Navbar/>
            <body
                className="view view--no-footer-triangle story story--pad-bottom view--silver view--scroll-up story--scroll-up view--sticky story--sticky view--init story--init">
            <div className="view__content view__content--open">
                <main className="view__container">
                    <header className="timeline-header view__panel">
                        <div className="timeline-header__body view__panel">
                            <h1 className="timeline-header__title">The History of Computing</h1>
                            <p className="timeline-header__subtitle">
                                This is by no means a complete historiography, but aims to be a supplement to the book
                                written by Prof.
                                Thiruvathukal and Prof. Dennis and to serve as a introduction to new learners.</p>
                        </div>
                    </header>
                    <div className="view__content">
                        <section className="timeline timeline--3">
                            <ul className="timeline__list">
                                <li id="moment-1" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1914"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1941.zusez3.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1941</span><span
                                        className="timeline-item__location">Berlin, Germany</span><h3
                                        className="timeline-item__title">Konrad Zuse finishes the Z3 Computer</h3></div>
                                </a></li>
                                <li id="moment-2" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1917"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1944.harvardmarkI.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">August 7, 1944</span><span
                                        className="timeline-item__location">Cambridge, US</span><h3
                                        className="timeline-item__title">Harvard Mark 1 is completed</h3>
                                    </div>
                                </a></li>
                                <li id="moment-3" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1917"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1962.linc.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1962</span><span
                                        className="timeline-item__location">Cambridge, US</span><h3
                                        className="timeline-item__title">MIT LINC introduced</h3>
                                    </div>
                                </a></li>
                                <li id="moment-4" className="timeline-item timeline-item--3 timeline-item--anne-frank"
                                    data-year="1916"><a href="#" className="timeline-item__link">
                                </a></li>
                                <li id="moment-5" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1917"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1964.sabre.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1964</span><span
                                        className="timeline-item__location">New York, US</span><h3
                                        className="timeline-item__title">SABRE comes on-line</h3>
                                    </div>
                                </a></li>
                                <li id="moment-6" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1917"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1971.hp35.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1972</span><span
                                        className="timeline-item__location">Palo Alto, US</span><h3
                                        className="timeline-item__title">Hewlett-Packard introduces the HP-35</h3>
                                    </div>
                                </a></li>
                                <li id="moment-7" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1918"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/Scamp.png"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1973</span><span
                                        className="timeline-item__location">Los Gatos, US</span><h3
                                        className="timeline-item__title">IBM Scamp is created</h3></div>
                                </a></li>
                                <li id="moment-8" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1918"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cs.columbia.edu%2F~sedwards%2Fapple2fpga%2FApple-II.jpg&f=1&nofb=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">June 1977</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">
                                        Apple II introduced
                                    </h3></div>
                                </a></li>
                                <li id="moment-9" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleshayman.files.wordpress.com%2F2012%2F09%2Fsun_microsystems.jpg&f=1&nofb=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">February 24, 1982</span><span
                                        className="timeline-item__location">Menlo Park, US</span><h3
                                        className="timeline-item__title">Sun Microsystems is founded</h3></div>
                                </a></li>
                                <li id="moment-10" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F59%2FCommodore_Educator_64_%2528standout_version%2529.jpg&f=1&nofb=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">August 1982</span><span
                                        className="timeline-item__location">Toronto, Canada</span><h3
                                        className="timeline-item__title">Commodore introduces the Commodore 64</h3>
                                    </div>
                                </a></li>
                                <li id="moment-11" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://i.pinimg.com/originals/7d/10/38/7d10383c5430c257ccb0fe4ac0dd76bb.png"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">January 24, 1984</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">Apple launches the Macintosh</h3></div>
                                </a></li>
                                <li id="moment-12" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6FfHafFxuz9Mgv4rVoBcnwHaFG%26pid%3DApi&f=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">September 1988</span><span
                                        className="timeline-item__location">Palo Alto, US</span><h3
                                        className="timeline-item__title">Steve Jobs and NeXT creates the NeXTcube</h3>
                                    </div>
                                </a></li>
                                <li id="moment-14" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://images.computerhistory.org/timeline/timeline_computers_1993.newton.jpg"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">May 8, 1993</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">Apple Newton is released</h3></div>
                                </a></li>
                                <li id="moment-15" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qH7GBfOOw_k3eii0W0mRgQHaFj%26pid%3DApi&f=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">1996</span><span
                                        className="timeline-item__location">Palo Alto, US</span><h3
                                        className="timeline-item__title">IBM releases the ThinkPad 701C</h3></div>
                                </a></li>
                                <li id="moment-16" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.vam.ac.uk%2Fmedia%2Fthira%2Fcollection_images%2F2009BX%2F2009BX8549.jpg&f=1&nofb=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">August 15, 1998</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">The iMac G3, the coolest looking computer ever,
                                        is released</h3></div>
                                </a></li>
                                <li id="moment-17" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="https://cms.qz.com/wp-content/uploads/2017/01/steve-jobs-apple-original-iphone-launch-2007.jpg?quality=75&strip=all&w=1600&h=900&crop=1"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">June 29, 2007</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">The iPhone is released</h3></div>
                                </a></li>
                                <li id="moment-18" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="data:image/jpeg;base64,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"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">April 3, 2010</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">
                                        The Apple iPad is released
                                    </h3></div>
                                </a></li>
                                <li id="moment-19" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt="None"
                                                                                   src="data:image/jpeg;base64,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"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">February 2012</span><span
                                        className="timeline-item__location">Cambridge, UK</span><h3
                                        className="timeline-item__title">Raspberry Pi Model B is released</h3></div>
                                </a></li>
                                <li id="moment-20" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    <figure className="timeline-item__figure"><img alt=""
                                                                                   // src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUG2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572391499434"
                                                                                   className="timeline-item__image timeline-item__image--landscape object-fit"/>
                                    </figure>
                                    <div className="timeline-item__body"><span
                                        // className="timeline-item__date">June 5, 2019</span><span
                                        className="timeline-item__location">Cupertino, US</span><h3
                                        className="timeline-item__title">Apple revolutionizes the industry by inventing
                                        the pro stand</h3></div>
                                </a></li>
                                <li id="moment-21" className="timeline-item timeline-item--3 timeline-item--context"
                                    data-year="1919"><a href="#" className="timeline-item__link">
                                    {/*<figure className="timeline-item__figure"><img alt="None"*/}
                                    {/*                                               src="https://annefrank.freetls.fastly.net/media/filer_public_thumbnails/filer_public/e2/43/e24355eb-20b7-405d-85fc-cb0dfe8e54bc/niod_1390.jpg__640x427_q85_crop_subsampling-2_upscale.jpg"*/}
                                    {/*                                               className="timeline-item__image timeline-item__image--landscape object-fit"/>*/}
                                    {/*</figure>*/}
                                    <div className="timeline-item__body"><span
                                        className="timeline-item__date">February 2012</span><span
                                        className="timeline-item__location">Cambridge, UK</span><h3
                                        className="timeline-item__title">Raspberry Pi Model B is released</h3></div>
                                </a></li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
            </body>
        </div>
    )
}
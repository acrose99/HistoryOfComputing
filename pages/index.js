import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import {Component} from "react";
import {ThemeStyles} from "../context/themeStyles";

//TODO Optimize image to use background layout

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowBig: true,
    }
  }


  updateMenuStyle() {
    // if the width is less than 768, it goes into small menu
    if (window.innerWidth < 768) {
      this.setState({ windowBig: false, });
    }
    else {
      this.setState({ windowBig: true, });
    }
  }

  componentDidMount() {
    this.updateMenuStyle();
    window.addEventListener("resize", this.updateMenuStyle.bind(this));
  }
  componentWillUnmount() {
    // tutorial said i should unmount the event listener so here it is
    window.removeEventListener("resize", this.updateMenuStyle.bind(this));
  }
  render() {
    let theme = this.context;
    if (this.state.windowBig === false) {
      return (
          <div>
            <Head>
              <title>History of Computing</title>
              <meta name="description" content="An fun and innovative way to learn the History of Computing" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.HomeContentMobile}>
              {/*<Navbar/>*/}
              {/*<img id="homeImgMobile"  src={HomeImg} alt="Intro"/>*/}
              <div className={styles.heroText}>
                <h1 style={{fontSize: '38px'}} className={styles.heroHeader}>
                  Welcome to The History of Computing!
                </h1>
                  <Link href="/Timeline/all">
                      <a className={styles.homeBtn}> See the timeline</a>
                  </Link>
              </div>
              {/*<Footer/>*/}
              {/*<div style={{display: "flex", flexGrow: 1, backgroundColor: theme.background }}>*/}
              {/*</div>*/}
            </div>
          </div>
      )
    }
    else return (
        <div>
          <Head>
            <title>History of Computing</title>
            <meta name="description" content="An fun and innovative way to learn the History of Computing" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Image priority={true} objectFit="cover" layout="fill" quality={100} className={styles.homeImg} src='/Background.png'/>
          <div className={styles.hero}>
              <div className={styles.heroText}>
                <h1 className={styles.heroHeader}>
                  Welcome to The History of Computing!
                </h1>
                <Link href="/Timeline/all">
                  <a className={styles.homeBtn}> See the timeline</a>
                </Link>
              </div>
          </div>
        </div>
    )
  }
}
Home.contextType = ThemeStyles;
export default Home


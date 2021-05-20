import React, {useContext} from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {ThemeStyles} from '../context/themeStyles'
import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-carbon/email';
import githubFilled from '@iconify/icons-ant-design/github-filled';


export default function Footer() {
    const theme = useContext(ThemeStyles);
    return (
        <div>
            <div style={{backgroundColor: theme.background}} className={styles.footer04}>
                <div className={styles.container}>
                    <div className={styles.footerFlexWrap}>
                        <div className={styles.footerBlockLeft}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}

                            <Link style={{textDecorationColor: theme.textFooterColor}} href="/">
                                <h2 style={{color: theme.textFooterColor, fontStyle: "italic"}} >The History Of Computing </h2>
                            </Link>
                            <p style={{color: theme.textFooterColor}}  className={styles.slogan}>
                                We make History fun.
                            </p>
                        </div>
                        <div className={styles.lineBreak} />
                        <div className={styles.footerBlockRight}>
                            <div className={styles.wLayoutGrid}>
                                <div className={styles.footerColumn}>
                                    <Link href="/Team" className={styles.footerTitle}>
                                        <a className={styles.footerTitle} style={{color: theme.textFooterColor}}>About</a>
                                    </Link>
                                    <Link href="/Timeline" className={styles.footerTitle}>
                                        <a className={styles.footerTitle} style={{color: theme.textFooterColor}}>Timeline</a>
                                    </Link>
                                    <div style={{color: theme.textFooterColor}} className={styles.footerTitle}>Contribute:</div>
                                    <IconButton href="https://github.com/acrose99/HistoryOfComputing" edge={"start"}>
                                        <Icon className={styles.footerMenuButtonIcon} icon={githubFilled} style={{ color: theme.textFooterColor }} />
                                    </IconButton>
                                    <IconButton href="mailto:arose5@luc.edu" edge={"start"}>
                                        <Icon className={styles.footerMenuButtonIcon} style={{ color: theme.textFooterColor }} icon={emailIcon} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottomFull}>
                        <div className={styles.footerWrapper}>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

import React, { Component } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {ThemeStyles} from '../context/themeStyles'
import IconButton from "@material-ui/core/IconButton";
import { Icon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import menuOutlined from '@iconify/icons-ant-design/menu-outlined';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowBig: true,
        }
    }
    render() {
        let theme = this.context;
        return (
          <div
            style={{ backgroundColor: theme.navbarBackground }}
            className="flex font-sans items-center bg-white transition ease-in-out duration-1000 w-full sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 border-b-2 border-gray-200 text-slate-800"
            style={{
              height: "5rem",
              // @ts-ignore
            }}
          >
            <h2 style={{ color: theme.headerColor }} className={styles.title}>
              The History Of Computing
            </h2>
            <Link href="/Timeline/all">
              <a className="mx-4 text-base hover:text-indigo-500">
                The Timeline
              </a>
            </Link>
            <Link href="/Team">
              <a className="mx-4 text-base hover:text-indigo-500">About Us</a>
            </Link>
            <IconButton
              className="mx-4 text-base hover:text-indigo-500"
              href="https://github.com/acrose99/HistoryOfComputing"
              edge={"end"}
            >
              <Icon
                className={styles.NavbarMenuButtonIcon}
                icon={githubFilled}
                style={{ color: theme.textNavbarColor }}
              />
            </IconButton>
          </div>
        );
    }
}

Navbar.contextType = ThemeStyles;

export default Navbar;

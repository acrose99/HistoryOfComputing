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
            className="flex font-sans items-center text-slate-900 bg-white w-full sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 border-b-2 border-gray-200"
            style={{
              height: "5rem",
              // @ts-ignore
            }}
          >
            <Link href="/">
              <a className="mx-4 text-2xl font-extrabold transition-colors hover:text-indigo-500">
                The History Of Computing
              </a>
            </Link>
            <Link href="/Timeline/all">
              <a className="mx-4 text-base transition-colors hover:text-indigo-500">
                The Timeline
              </a>
            </Link>
            {/* <Link href="/Team">
              <a className="mx-4 text-base transition-colors hover:text-indigo-500">
                About Us
              </a>
            </Link> */}
            <IconButton
              className="mx-4 text-base transition-colors text-slate-900 hover:text-indigo-500"
              href="https://github.com/acrose99/HistoryOfComputing"
              edge={"end"}
            >
              <Icon className="text-3xl" icon={githubFilled} />
            </IconButton>
          </div>
        );
    }
}

Navbar.contextType = ThemeStyles;

export default Navbar;

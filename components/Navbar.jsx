import React, { Component } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { ThemeStyles } from "../context/themeStyles";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import menuOutlined from "@iconify/icons-ant-design/menu-outlined";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <SunIcon onClick={() => setTheme("dark")} />
      ) : (
        <MoonIcon onClick={() => setTheme("light")} />
      )}
    </>
  );
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowBig: true,
    };
  }
  render() {
    let theme = this.context;
    return (
      <div
        style={{ backgroundColor: theme.navbarBackground }}
        className="flex items-center px-2 text-slate-900 dark:text-white bg-white dark:bg-black w-full space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 border-b-2 border-gray-200"
        style={{
          height: "5rem",
          // @ts-ignore
        }}
      >
        <Link href="/">
          <a className="hover:underline text-base sm:text-xl font-extrabold transition-colors hover:text-indigo-500">
            The History Of Computing
          </a>
        </Link>
        <Link href="/Timeline/all">
          <a className="hover:underline text-base transition-colors hover:text-indigo-500">
            The Timeline
          </a>
        </Link>
        {/* <Link href="/Team">
              <a className="mx-4 text-base transition-colors hover:text-indigo-500">
                About Us
              </a>
            </Link> */}
        <IconButton
          className="text-base hover:underline hover:text-indigo-500"
          href="https://github.com/acrose99/HistoryOfComputing"
          edge={"end"}
        >
          <Icon
            className="hover:underline text-3xl text-slate-900 dark:text-white transition-colors"
            icon={githubFilled}
          />
        </IconButton>
        <ThemeSwitcher />
      </div>
    );
  }
}

Navbar.contextType = ThemeStyles;

export default Navbar;

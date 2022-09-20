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
import Filterer from "./Filterer/Filterer";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <SunIcon
          className="stroke-mauve-12 hover:stroke-violet-11 h-4 w-4 transition-all duration-500"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MoonIcon
          className="stroke-mauve-12 hover:stroke-violet-11 h-4 w-4 transition-all duration-500"
          onClick={() => setTheme("light")}
        />
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
    return (
      <div className="sticky z-10 top-0 flex items-center p-4 text-mauve-12 bg-violet-1 w-full space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16 border-b-2 border-gray-200">
        <Link href="/">
          <a className="hover:underline text-base sm:text-xl font-extrabold transition-all  hover:text-violet-11">
            The History Of Computing
          </a>
        </Link>
        <Link href="/Timeline/all">
          <a className="hover:underline text-center sm:text-left text-base transition-all hover:text-violet-11">
            The Timeline
          </a>
        </Link>
        {/* <Link href="/Team">
              <a className="mx-4 text-base transition-colors hover:text-violet-500">
                About Us
              </a>
            </Link> */}
        <IconButton
          className="text-base hover:underline hover:text-violet-11"
          href="https://github.com/acrose99/HistoryOfComputing"
          edge={"end"}
        >
          <Icon
            className="hover:underline text-3xl text-mauve-12 hover:text-violet-12 transition-all"
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

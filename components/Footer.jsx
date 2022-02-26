import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { ThemeStyles } from "../context/themeStyles";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-carbon/email";
import githubFilled from "@iconify/icons-ant-design/github-filled";

export default function Footer() {
  const theme = useContext(ThemeStyles);
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black">
      <span class="text-sm text-black sm:text-center dark:text-white">
        © 2022{" "}
        <Link href="/">
          <a class="hover:underline">History of Computing</a>
        </Link>
      </span>
      <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
          <a
            href="https://github.com/acrose99/HistoryOfComputing"
            class="mr-4 text-sm text-black hover:underline md:mr-6 dark:text-white"
          >
            Source Code
          </a>
        </li>
        <li>
          <a
            href="mailto:acrosemail@gmail.com"
            class="mr-4 text-sm text-black hover:underline md:mr-6 dark:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

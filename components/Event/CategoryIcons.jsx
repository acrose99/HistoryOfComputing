import React from 'react';
import {addIcon, Icon} from '@iconify/react';
import booksIcon from '@iconify/icons-raphael/books';
import circuitBoard from '@iconify/icons-codicon/circuit-board';
import appWindowDuotone from '@iconify/icons-ph/app-window-duotone';
import gaming15 from '@iconify/icons-maki/gaming-15';
import bxCodeCurly from '@iconify/icons-bx/bx-code-curly';
import robotExcitedOutline from '@iconify/icons-mdi/robot-excited-outline';


import appleFilled from "@iconify/icons-ant-design/apple-filled";
import ibmIcon from "@iconify/icons-cib/ibm";
import bxlMicrosoft from "@iconify/icons-bx/bxl-microsoft";
import attIcon from "@iconify/icons-file-icons/att";
import oracleIcon from '@iconify/icons-simple-icons/oracle';
import solarisIcon from '@iconify/icons-grommet-icons/solaris';


/* Categories */
/*icons={[booksIcon, circuitBoard, appWindowDuotone, bxCodeCurly, robotExcitedOutline, gaming15]} */
addIcon('Culture', booksIcon);
addIcon('Hardware', circuitBoard);
addIcon('Software', appWindowDuotone);
addIcon('Languages', bxCodeCurly);
addIcon('AI', robotExcitedOutline);
addIcon('Gaming', gaming15);


/* Companies */
// icons={[appleFilled, ibmIcon, bxlMicrosoft, attIcon, oracleIcon, solarisIcon]

addIcon('Apple', appleFilled);
addIcon('IBM', ibmIcon);
addIcon('Microsoft', bxlMicrosoft);
addIcon('ATAT', attIcon);
addIcon('Oracle', oracleIcon);
addIcon('Sun', solarisIcon);


export default function CategoryIcons(props) {
    return props.icons.map((icon, index) =>
            <a className='text-slate-900 dark:text-white transition-colors hover:text-indigo-500' key={index} title={"Category: " + icon} href={"/Timeline/" + icon}>
                <Icon icon={icon} width={'1.8em'} height={'1.8em'}/>
            </a>
        )
}
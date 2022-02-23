import React, {useState} from 'react';
import { Icon, addIcon } from '@iconify/react';
import crossIcon from '@iconify/icons-la/cross';
import internetOfThingsLine from '@iconify/icons-clarity/internet-of-things-line';
import abjadArabic from '@iconify/icons-mdi/abjad-arabic';
import microscopeIcon from '@iconify/icons-carbon/microscope';
import bxsFactory from '@iconify/icons-bx/bxs-factory';
import cardFileBox from '@iconify/icons-emojione-monotone/card-file-box';
import imacIcon from '@iconify/icons-whh/imac';
import styles from "./EventFocus.module.css";

addIcon('Ancient', abjadArabic);
addIcon('Medieval', crossIcon);
addIcon('Enlightenment', microscopeIcon);
addIcon('Industrial', bxsFactory);
addIcon('EarlyComputing', cardFileBox);
addIcon('ModernComputing', imacIcon);
addIcon('InformationAge', internetOfThingsLine);

interface eraIconProps {
    icon: string;
}
export default function EraIcon({
    icon,
}) {
    return (
                <a className='flex self-center text-slate-900 dark:text-white hover:text-indigo-500 transition-colors' title={"Era: " + icon} href={"/Timeline/" + icon} >
                    <Icon 
                    icon={icon} width={'1.8em'} height={'1.8em'} />
                </a>
        )
}
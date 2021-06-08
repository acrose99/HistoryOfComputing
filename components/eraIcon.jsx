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


export default function EraIcon(props) {
    return (
                <a title={"Era:" + props.icon} href={"/Timeline/" + props.icon} >
                    <Icon icon={props.icon} width={'2em'} height={'2em'} />
                </a>
        )
}
import React, {useContext, useState} from "react";
import { useRouter } from 'next/router'
import TimelineComponent from "../../../components/timelineComponent";
import Filterer from "../../../components/Filterer/Filterer";
import Navbar from "../../../components/Navbar";
import {ThemeStyles} from "../../../context/themeStyles";
import {themes} from '../../../context/themeStyles';
import ShowAll from "../../../components/Filterer/ShowAll";

//TODO figure out changing the theme based on the id

export default function Timeline(props) {
    const router = useRouter()
    const { id } = router.query
    let theme = useContext(ThemeStyles);
    if (id !== 'all') {
        return (
            <div style={{backgroundImage: theme.backgroundImage}} id="TimelineContainer">
                <Navbar/>
                <Filterer toggleTheme={props.toggleTheme} timelineFilter={props.timelineFilter} handleFilterChange={props.handleFilterChange} handleFilterChangeYear={props.handleFilterChangeYear}/>
                <ShowAll onClickFiltererType={props.showAll}/>
                <TimelineComponent  filter={id}/>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <div style={{backgroundImage: theme.backgroundImage}} id="TimelineContainer">
                    <Navbar/>
                    <Filterer toggleTheme={props.toggleTheme} timelineFilter={props.timelineFilter} handleFilterChange={props.handleFilterChange} handleFilterChangeYear={props.handleFilterChangeYear}/>
                    <TimelineComponent filter={id}/>
                </div>
            </div>

        )
    }
}


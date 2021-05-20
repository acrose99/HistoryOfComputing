import React, {useContext, useState} from "react";
import { useRouter } from 'next/router'
import Timeline from "./[timeline]";

export default function TimelineWrapper(props) {
    const [timelineFilter, setTimelineFilter] = useState('all');

    const router = useRouter()
    const { pathname, query } = router
    const changeURL = (filter) => {
        const href = `/Timeline/${filter}`
        router.push(href, href, { shallow: true })
    }

    function showAll() {
        handleFilterChange('all');
        props.toggleTheme('Vaporwave');
    }
    function handleFilterChange(filter) {
        setTimelineFilter(filter);
        changeURL(filter);
    }
    function handleFilterChangeYear(filterMin, filterMax) {
        //TODO internal logic depending on years selected, I.E ancient vs modern
        props.toggleTheme('Vaporwave');
        handleFilterChange([filterMin, filterMax]);
    }
    function toggleTheme(theme) {
        props.toggleTheme(theme);
    }

    return (
        <Timeline showAll={showAll} onClickFiltererType={showAll}  filter={timelineFilter}
                  toggleTheme={toggleTheme} handleFilterChange={handleFilterChange} handleFilterChangeYear={handleFilterChange}/>
    )
}


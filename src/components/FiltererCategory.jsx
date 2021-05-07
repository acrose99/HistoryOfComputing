import React from "react";
import {InlineIcon} from "@iconify/react";
import caretUpFilled from "@iconify/icons-ant-design/caret-up-filled";


function filtererCategory(props) {
   function onClickFiltererType(filter, theme) {
       if (filter === 'Early Computing' ||theme === 'Early Computing') {
           props.toggleTheme('EarlyComputing')
           changeTimeLineFilter('EarlyComputing')
       }
       else {
           props.toggleTheme(theme)
           changeTimeLineFilter(filter)
       }
    }
    function changeTimeLineFilter(filter) {
        props.handleFilterChange(filter)
    }
    function showCategory(category) {
        let categoryElement = document.getElementById(category);

        let icon = document.getElementById(category + "Icon")

        if (categoryElement.style.display === 'none' || categoryElement.style.display === '') { //empty string for initial state
            categoryElement.style.display = 'flex';
            icon.style.transform = 'rotateZ(180deg)';
        } else if (categoryElement.style.display === 'flex') {
            categoryElement.style.display = 'none';
            icon.style.transform = 'rotateZ(0deg)';
        }
    }

    const filters = props.filters.map((filter, index) =>
            <div key={index} className="filtererCategoryType">
                <div onClick={() => onClickFiltererType(filter, filter)}
                     className="filtererCategoryTypeContainer">
                    <InlineIcon className="filtererCategoryIcon" height={32} width={32}
                                icon={props.icons[index]}/>
                    <h4 className="filtererCategoryTypeHeader">{filter}</h4>
                </div>
            </div>
    );

    return (
        <div>
            <div className="filtererCategoryContainer">
                <div className="filtererCategoryHeaderContainer">
                    <h4 className="filtererCategory">{props.category}</h4>
                    <InlineIcon id={props.category + "Icon"} className="icon" onClick={() => showCategory(props.category)}
                                height={16} width={16} icon={caretUpFilled} style={{color: '#ffff'}}/>
                </div>
            </div>
            <div id={props.category} className="filtererCategoriesOpened">
                {filters}
            </div>
        </div>
    )
}

export default filtererCategory

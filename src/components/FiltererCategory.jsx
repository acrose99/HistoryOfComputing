import React from "react";
import {InlineIcon} from "@iconify/react";
import caretRightOutlined from '@iconify/icons-ant-design/caret-right-outlined';


function filtererCategory(props) {
   function onClickFiltererType(filter, theme) {
       if (filter === 'Early Computing' ||theme === 'early computing') {
           props.toggleTheme('EarlyComputing')
           changeTimeLineFilter('EarlyComputing')
       }
       if (filter === 'Modern Computing' ||theme === 'modern computing') {
           props.toggleTheme('ModernComputing')
           changeTimeLineFilter('ModernComputing')
       }
       if (filter === 'Information Age' ||theme === 'information age') {
           props.toggleTheme('InformationAge')
           changeTimeLineFilter('InformationAge')
       }
       if (filter === 'Imagination Age' ||theme === 'imagination age') {
           props.toggleTheme('ImaginationAge')
           changeTimeLineFilter('ImaginationAge')
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
            icon.style.transform = 'rotateZ(90deg)';
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
                <h4 className="filtererCategory">{props.category}</h4>
                <InlineIcon id={props.category + "Icon"} className="icon" onClick={() => showCategory(props.category)}
                            height={16} width={16} icon={caretRightOutlined} style={{color: '#ffff'}}/>

                <div id={props.category} className="filtererCategoriesOpened">
                    {filters}
                </div>
            </div>
        </div>
    )
}

export default filtererCategory

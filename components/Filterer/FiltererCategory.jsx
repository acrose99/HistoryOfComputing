import React from "react";
import {InlineIcon} from "@iconify/react";
import caretRightOutlined from '@iconify/icons-ant-design/caret-right-outlined';

import styles from './Filterer.module.css';

function filtererCategory(props) {
    function onClickFiltererType(filter, theme) {
        if (filter === 'Early Computing' || theme === 'Early Computing') {
            props.toggleTheme('EarlyComputing')
            changeTimeLineFilter('EarlyComputing');
        }
        else if (filter === 'Modern Computing' ||theme === 'modern computing') {
            props.toggleTheme('ModernComputing')
            changeTimeLineFilter('ModernComputing')
        }
        else if (filter === 'Information Age' ||theme === 'information age') {
            props.toggleTheme('InformationAge')
            changeTimeLineFilter('InformationAge')
        }
        else if (filter === 'Imagination Age' ||theme === 'imagination age') {
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
        <div key={index} className={styles.filtererCategoryType}>
            <div onClick={() => onClickFiltererType(filter, filter)}
                 className={styles.filtererCategoryTypeContainer}>
                <InlineIcon className={styles.filtererCategoryIcon}height={32} width={32}
                            icon={props.icons[index]}/>
                <h4 className={styles.filtererCategoryTypeHeader}>{filter}</h4>
            </div>
        </div>
    );

    return (
        <div>
            <div className={styles.filtererCategoryContainer}>
                <h4 className={styles.filtererCategory}>{props.category}
                    <InlineIcon id={props.category + "Icon"} className={styles.icon}
                                onClick={() => showCategory(props.category)}
                                height={16} width={16} icon={caretRightOutlined} style={{color: '#ffff'}}/>
                </h4>

                <div id={props.category} className={styles.filtererCategoriesOpened}>
                    {filters}
                </div>
            </div>
        </div>
    )
}

export default React.memo(filtererCategory);

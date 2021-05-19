import React, {Component} from "react";
import styles from './Filterer.module.css';
import {InlineIcon} from '@iconify/react';
import appleIcon from '@iconify/icons-openmoji/apple';
import caretRightOutlined from '@iconify/icons-ant-design/caret-right-outlined';
import bxlMicrosoft from '@iconify/icons-bx/bxl-microsoft';
import crossIcon from '@iconify/icons-la/cross';
import abjadArabic from '@iconify/icons-mdi/abjad-arabic';
import microscopeIcon from '@iconify/icons-carbon/microscope';
import RangeInput from "./RangeInput";
import ibmIcon from '@iconify/icons-cib/ibm';
import bxsFactory from '@iconify/icons-bx/bxs-factory';
import cardFileBox from '@iconify/icons-emojione-monotone/card-file-box';
import womenLine from '@iconify/icons-ri/women-line';
import rainbowFlag from '@iconify/icons-twemoji/rainbow-flag';
import globeIcon from '@iconify/icons-vs/globe';
import circuitBoard from '@iconify/icons-codicon/circuit-board';
import appWindowDuotone from '@iconify/icons-ph/app-window-duotone';
import gaming15 from '@iconify/icons-maki/gaming-15';
import robotExcitedOutline from '@iconify/icons-mdi/robot-excited-outline';
import imacIcon from '@iconify/icons-whh/imac';
import bxCodeCurly from '@iconify/icons-bx/bx-code-curly';
import booksIcon from '@iconify/icons-raphael/books';


import FilterCategory from "./FiltererCategory";
import ShowAll from "./ShowAll";
import {ThemeStyles} from "../../context/themeStyles";


/* TODO: Have some sort of Search? */
class Filterer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtererType: this.props.filtererType,
            minYear: -3300,
            maxYear: 2021
        }
        this.changeFiltererType = this.changeFiltererType.bind(this);
        this.showCategory = this.showCategory.bind(this);
        this.changeTimeLineFilter = this.changeTimeLineFilter.bind(this);
        this.changeTimelineFilterYear = this.changeTimelineFilterYear.bind(this);
        this.handleYear = this.handleYear.bind(this);
    }

    onClickFiltererType(filter, theme) {
        this.props.toggleTheme(theme)
        this.changeTimeLineFilter(filter)
    }

    changeTimeLineFilter(filter) {
        this.props.handleFilterChange(filter)
    }

    changeTimelineFilterYear(minFilter, maxFilter) {
        this.props.handleFilterChangeYear(minFilter, maxFilter)
    }

    changeFiltererType(type) {
        this.setState(function (state) {
            return {
                filtererType: type
            };
        });
    }

    handleYear(value) {
        this.setState({
            year: value
        })
    }

    showCategory(category) {
        if (category === 'Companies') {
            let categoryElement = document.getElementById("Companies");

            let icon = document.getElementById("CompanyIcon")

            if (categoryElement.style.display === 'none' || categoryElement.style.display === '') { //empty string for initial state
                categoryElement.style.display = 'flex';
                icon.style.transform = 'rotateZ(90deg)';
            } else if (categoryElement.style.display === 'flex') {
                categoryElement.style.display = 'none';
                icon.style.transform = 'rotateZ(0deg)';
            }
        }
        if (category === 'Eras') {
            let categoryElement = document.getElementById("Eras");

            let icon = document.getElementById("EraIcon")

            if (categoryElement.style.display === 'none' || categoryElement.style.display === '') { //empty string for initial state
                categoryElement.style.display = 'flex';
                icon.style.transform = 'rotateZ(90deg)';
            } else if (categoryElement.style.display === 'flex') {
                categoryElement.style.display = 'none';
                icon.style.transform = 'rotateZ(0deg)';
            }
        }
        if (category === 'Year') {
            let categoryElement = document.getElementById("Year");

            let icon = document.getElementById("YearIcon")

            if (categoryElement.style.display === 'none' || categoryElement.style.display === '') { //empty string for initial state
                categoryElement.style.display = 'flex';
                icon.style.transform = 'rotateZ(90deg)';
            } else if (categoryElement.style.display === 'flex') {
                categoryElement.style.display = 'none';
                icon.style.transform = 'rotateZ(0deg)';
            }
        }
    }

    render() {
        let theme = this.context;
        return (
            <div>
                <div>
                    <div style={{background: theme.navbarBackground}} className={styles.filterer}>
                        <div className={styles.filtererContainer}>
                            <h4 className={styles.filtererClosedHeader}>Filter Events:</h4>
                        </div>
                        <div style={{display: "flex"}} className={styles.filtererContainer}>
                            <div className={styles.filtererCategoryHeaderContainer}>
                                <h4 className={styles.filtererCategory}>Years</h4>
                                <InlineIcon id="YearIcon" className={styles.icon}
                                            onClick={() => this.showCategory('Year')}
                                            height={16} width={16} icon={caretRightOutlined} style={{color: '#ffff'}}/>
                            </div>
                            <div id="Year" className={styles.filtererCategoriesOpened}>
                                <RangeInput changeTimelineFilterYear={this.changeTimelineFilterYear}
                                            maxYear={this.state.maxYear} minYear={this.state.minYear}/>
                            </div>
                        </div>
                        <FilterCategory category="Categories"
                            //"Modern Computing", "Information Age", "'Imagination Age'"
                                        filters={["Culture", "Hardware", "Software", "Languages", "AI",  "Gaming"]}
                                        icons={[booksIcon, circuitBoard, appWindowDuotone, bxCodeCurly, robotExcitedOutline, gaming15]}
                                        toggleTheme={this.props.toggleTheme}
                                        handleFilterChange={this.props.handleFilterChange}/>


                        <FilterCategory category="Eras"
                            //"Information Age", "'Imagination Age'"
                                        filters={["Ancient", "Medieval", "Enlightenment", "Industrial", "Early Computing", "Modern Computing"]}
                                        icons={[abjadArabic, crossIcon, microscopeIcon, bxsFactory, cardFileBox, imacIcon]}
                                        toggleTheme={this.props.toggleTheme}
                                        handleFilterChange={this.props.handleFilterChange}/>

                        <FilterCategory category="Companies" filters={["Apple", "IBM", "Microsoft"]}
                                        icons={[appleIcon, bxlMicrosoft, ibmIcon]}
                                        toggleTheme={this.props.toggleTheme}
                                        handleFilterChange={this.props.handleFilterChange}/>
                        <FilterCategory category="Representation" filters={["Women", "LGBTQ", "POC"]}
                                        icons={[womenLine, rainbowFlag, globeIcon]}
                                        toggleTheme={this.props.toggleTheme}
                                        handleFilterChange={this.props.handleFilterChange}/>

                    </div>
                </div>
            </div>
        )
    }
}

Filterer.contextType = ThemeStyles;

export default Filterer




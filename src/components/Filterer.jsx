import React, {Component} from "react";
import './Filterer.css';
// import {ThemeStyles} from '../themeStyles';
import {InlineIcon} from '@iconify/react';
import appleIcon from '@iconify/icons-openmoji/apple';
import caretUpFilled from '@iconify/icons-ant-design/caret-up-filled';
import caretDownOutlined from '@iconify/icons-ant-design/caret-down-outlined';
import caretRightOutlined from '@iconify/icons-ant-design/caret-right-outlined';
import bxlMicrosoft from '@iconify/icons-bx/bxl-microsoft';
import crossIcon from '@iconify/icons-la/cross';
import abjadArabic from '@iconify/icons-mdi/abjad-arabic';
import microscopeIcon from '@iconify/icons-carbon/microscope';
import "react-input-range/lib/css/index.css";
import RangeInput from "./RangeInput";
import ibmIcon from '@iconify/icons-cib/ibm';
import bxsFactory from '@iconify/icons-bx/bxs-factory';
import cardFileBox from '@iconify/icons-emojione-monotone/card-file-box';
import womenLine from '@iconify/icons-ri/women-line';
import rainbowFlag from '@iconify/icons-twemoji/rainbow-flag';
import globeIcon from '@iconify/icons-vs/globe';

import FilterCategory from "./FiltererCategory";
import ShowAll from "./ShowAll";


/* TODO: Refactor */
/* TODO: MOBILE */
/* TODO: Have some sort of Search? */
class Filterer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filtererType: this.props.filtererType,
            year: 2000
        }
        this.changeFiltererType = this.changeFiltererType.bind(this);
        this.showCategory = this.showCategory.bind(this);
        this.changeTimeLineFilter = this.changeTimeLineFilter.bind(this);
        this.handleYear = this.handleYear.bind(this);
    }
    onClickFiltererType(filter, theme) {
        this.props.toggleTheme(theme)
        this.changeTimeLineFilter(filter)
    }
    changeTimeLineFilter(filter) {
        this.props.handleFilterChange(filter)
    }
    changeFiltererType(type) {
        this.setState(function(state) {
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
            }
            else if (categoryElement.style.display === 'flex') {
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
            }
            else if (categoryElement.style.display === 'flex') {
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
            }
            else if (categoryElement.style.display === 'flex') {
                categoryElement.style.display = 'none';
                icon.style.transform = 'rotateZ(0deg)';
            }
        }
    }

    render() {
        // function showAll(props) {
        //     if (props.timelineFilter === '') {
        //         return (
        //             <div className="filtererShowAll">
        //                 <div className="filtererShowAllContainer">
        //                     <h4 onClick={() => props.onClickFiltererType('', 'Vaporwave')}
        //                         className="filtererShowAllHeader">Show All</h4>
        //                 </div>
        //             </div>
        //         )
        //     } else {
        //         return null;
        //     }
        // }
         return (
             <div>
                 <div id="filterer">
                     <div className="filtererContainer">
                         <h4 id="filtererClosedHeader">Filter Events:</h4>
                     </div>
                     <div className="filtererCategories">
                         <FilterCategory category="Companies" filters={["Apple", "IBM", "Microsoft"]}
                                         icons={[appleIcon, bxlMicrosoft, ibmIcon]}
                                         toggleTheme={this.props.toggleTheme}
                                         handleFilterChange={this.props.handleFilterChange}/>
                         <FilterCategory category="Eras"
                                         //"Modern Computing", "Information Age", "'Imagination Age'"
                                         filters={["Ancient", "Medieval", "Enlightenment", "Industrial", "Early Computing"]}
                                         icons={[abjadArabic, crossIcon, microscopeIcon, bxsFactory, cardFileBox]}
                                         toggleTheme={this.props.toggleTheme}
                                         handleFilterChange={this.props.handleFilterChange}/>
                         <FilterCategory category="Representation" filters={["Women", "LGBTQ", "POC"]}
                                         icons={[womenLine, rainbowFlag, globeIcon]}
                                         toggleTheme={this.props.toggleTheme}
                                         handleFilterChange={this.props.handleFilterChange}/>

                         <div id="filtererCategoryContainerYear" className="filtererCategoryContainer">
                             <div className="filtererCategoryHeaderContainer">
                                 <h4 className="filtererCategory">Year</h4>
                                 <InlineIcon id="YearIcon" className="icon" onClick={() => this.showCategory('Year')}
                                             height={16} width={16} icon={caretRightOutlined} style={{color: '#ffff'}}/>
                             </div>
                             <div id="Year" className="filtererCategoriesOpened">
                                 <div id="filtererContainerYear" className="filtererCategoryTypeContainer">
                                     <RangeInput handleYear={this.handleYear} year={this.state.year}/>
                                     {/*onClick={() => this.changeTimeLineFilter(this.state.year)}*/}
                                 </div>
                                 <button id="yearSubmit"
                                         onClick={() => this.changeTimeLineFilter(this.state.year)}>Set Year
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="filtererShowAllContainer">
                     <ShowAll onClickFiltererType={() => this.onClickFiltererType('', 'Vaporwave')} timelineFilter={this.props.timelineFilter}/>
                 </div>
             </div>
    )
    }
}

export default Filterer

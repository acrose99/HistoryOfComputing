import React, {Component} from "react";
import './Filterer.css';
// import {ThemeStyles} from '../themeStyles';
import {InlineIcon} from '@iconify/react';
import appleIcon from '@iconify/icons-openmoji/apple';
import caretUpFilled from '@iconify/icons-ant-design/caret-up-filled';
import caretDownOutlined from '@iconify/icons-ant-design/caret-down-outlined';
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
                icon.style.transform = 'rotateZ(180deg)';
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
                icon.style.transform = 'rotateZ(180deg)';
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
                icon.style.transform = 'rotateZ(180deg)';
            }
            else if (categoryElement.style.display === 'flex') {
                categoryElement.style.display = 'none';
                icon.style.transform = 'rotateZ(0deg)';
            }
        }
    }

    render() {
        console.log(this.props.timelineFilter);
        if (this.state.filtererType === 'Closed') {
            if (this.props.timelineFilter === '') {
                return (
                    <div id="filtererClosed">
                        <div className="filtererContainer">
                            <h4 id="filtererClosedHeader">Filter Events</h4>
                            <InlineIcon onClick={() => this.changeFiltererType('OpenCategories')} className="icon" height={32} width={32} icon={caretUpFilled} style={{color: '#ffff'}} />
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div id="filtererClosed">
                        <div className="filtererContainer">
                            <h4  id="filtererClosedHeader">Filter: {this.props.timelineFilter}</h4>
                            <InlineIcon onClick={() => this.changeFiltererType('OpenCategories')} className="icon" height={32} width={32} icon={caretUpFilled} style={{color: '#ffff'}} />
                        </div>
                        <div className="filtererShowAll">
                            <div  className="filtererShowAllContainer">
                                <h4 onClick={() => this.onClickFiltererType('', 'vaporwave')} className="filtererShowAllHeader">Show All</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        else if (this.state.filtererType === 'OpenCategories') {
            if (this.props.timelineFilter === '') {
                return (
                    <div id="filtererClosed">
                        <div className="filtererContainer">
                            <h4  id="filtererClosedHeader">Filter Events</h4>
                            <InlineIcon className="icon" onClick={() => this.changeFiltererType('Closed')}  height={32} width={32} icon={caretDownOutlined} style={{color: '#ffff'}} />
                        </div>
                        <div className="filtererCategories">
                            <FilterCategory category="Companies" filters={["Apple", "IBM", "Microsoft"]} icons={[appleIcon, bxlMicrosoft, ibmIcon ]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>
                            <FilterCategory category="Eras" filters={["Ancient", "Medieval", "Enlightenment", "Industrial", "Early Computing"]} icons={[abjadArabic, crossIcon, microscopeIcon, bxsFactory,  cardFileBox]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>
                            <FilterCategory category="Representation" filters={["Women", "LGBTQ", "POC"]} icons={[womenLine, rainbowFlag, globeIcon]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>

                            <div id="filtererCategoryContainerYear"className="filtererCategoryContainer">
                                <div className="filtererCategoryHeaderContainer">
                                    <h4 className="filtererCategory">Year</h4>
                                    <InlineIcon id="YearIcon" className="icon" onClick={() => this.showCategory('Year')}  height={16} width={16} icon={caretUpFilled} style={{color: '#ffff'}}/>
                                </div>
                                <div id="Year" className="filtererCategoriesOpened">
                                    <div id="filtererContainerYear" className="filtererCategoryTypeContainer">
                                        <RangeInput handleYear={this.handleYear} year={this.state.year}/>
                                        {/*onClick={() => this.changeTimeLineFilter(this.state.year)}*/}
                                    </div>
                                    <button id="yearSubmit" onClick={() => this.changeTimeLineFilter(this.state.year)}>Set Year</button>

                                </div>
                            </div>
                            {/* EVENTS NOT IMPLEMENTED YET, NO FILTER NEEDED*/}
                            {/*<div className="filtererCategoryContainer">*/}
                            {/*    <div className="filtererCategoryHeaderContainer">*/}
                            {/*        <h4 className="filtererCategory">Cultures</h4>*/}
                            {/*        <InlineIcon className="icon" onClick={() => this.changeFiltererType('Closed')}  height={16} width={16} icon={caretUpFilled} style={{color: '#ffff'}} />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div id="filtererClosed">
                        <div className="filtererContainer">
                            <h4  id="filtererClosedHeader">Filter: {this.props.timelineFilter}</h4>
                            <InlineIcon className="icon" onClick={() => this.changeFiltererType('Closed')}  height={32} width={32} icon={caretDownOutlined} style={{color: '#ffff'}} />
                        </div>
                            <div className="filtererCategories">
                                <FilterCategory category="Companies" filters={["Apple", "IBM", "Microsoft"]} icons={[appleIcon, bxlMicrosoft, ibmIcon ]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>
                                <FilterCategory category="Eras" filters={["Ancient", "Medieval", "Enlightenment", "Industrial", "Early Computing"]} icons={[abjadArabic, crossIcon, microscopeIcon, bxsFactory,  cardFileBox]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>
                                <FilterCategory category="Representation" filters={["Women", "LGBTQ", "POC"]} icons={[womenLine, rainbowFlag, globeIcon]} toggleTheme={this.props.toggleTheme} handleFilterChange={this.props.handleFilterChange}/>
                                <div id="filtererCategoryContainerYear" className="filtererCategoryContainer">
                                    <div className="filtererCategoryHeaderContainer">
                                        <h4 className="filtererCategory">Year</h4>
                                        <InlineIcon id="YearIcon" className="icon" onClick={() => this.showCategory('Year')}  height={16} width={16} icon={caretUpFilled} style={{color: '#ffff'}}/>
                                    </div>
                                    <div id="Year" className="filtererCategoriesOpened">
                                        <div id="filtererContainerYear" className="filtererCategoryTypeContainer">
                                            <RangeInput handleYear={this.handleYear} year={this.state.year}/>
                                            {/*onClick={() => this.changeTimeLineFilter(this.state.year)}*/}
                                        </div>
                                        <button id="yearSubmit" onClick={() => this.changeTimeLineFilter(this.state.year)}>Set Year</button>

                                    </div>
                                </div>
                                {/* EVENTS NOT IMPLEMENTED YET, NO FILTER NEEDED*/}
                                {/*<div className="filtererCategoryContainer">*/}
                                {/*    <div className="filtererCategoryHeaderContainer">*/}
                                {/*        <h4 className="filtererCategory">Cultures</h4>*/}
                                {/*        <InlineIcon className="icon" onClick={() => this.changeFiltererType('Closed')}  height={16} width={16} icon={caretUpFilled} style={{color: '#ffff'}} />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                    </div>
                )
            }
        }
        else return (
            (
                <div>
                    <h1>ERROR</h1>
                </div>
            )
        )
    }
}

export default Filterer

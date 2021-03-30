import React, {Component} from "react";
import './FiltererMobile.css';
import {Icon } from '@iconify/react';
import appleIcon from '@iconify/icons-openmoji/apple';
import bxlMicrosoft from '@iconify/icons-bx/bxl-microsoft';
import ibmIcon from "@iconify/icons-cib/ibm";
class FiltererMobile extends Component {
    constructor(props) {
        super(props);
        this.setState({
            currentIndex: 0,
        })
    }
    renderSlide(type) {
        if (type === 'Apple') {
            return (
                <Icon className="filtererMobileCategoryIcon" height={32} width={32} icon={appleIcon} />
            )
        }
        else if (type === 'IBM') {
                return (
                    <Icon className="filtererMobileCategoryIcon" height={32} width={32} icon={ibmIcon} />
                )
        }
        else if (type === 'Microsoft') {
                return (
                    <Icon className="filtererMobileCategoryIcon" height={32} width={32} icon={bxlMicrosoft} />
                )
        }
        else {
            return <p>{type}</p>
        }
    }
    render() {
        const types = ['Companies', 'Year']
        return (
            <div id="FiltererMobileCarousel">
                {types.map((type, index) =>
                    <div className="FiltererMobileType" key={index}>
                        {this.renderSlide(type)}
                    </div>
                )}
            </div>
        )
    }
}

export default FiltererMobile

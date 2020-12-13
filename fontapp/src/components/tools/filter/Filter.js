import './Filter.scss';
import FontCategory from "./font-category/FontCategory";
import FontStyle from "./font-style/FontStyle";
import NumberOfFonts from "./number-of-fonts/NumberOfFonts";
import React, { Component } from "react";
import {getFilteredFonts, getMatch} from './../../../store/selectors';
import { connect } from "react-redux";


class Filter extends Component {
    constructor(props) {
        super(props);
    }


    numberOfFonts(){
        return this.props.fonts.length;
    };

    getMatchingFont() {
        if (this.props.match) {
            return this.props.match.title;
        } else {
            return '-';
        }
    }

    render() {
        return (
            <div className="Filter tool-box">
                <FontCategory/>
                <FontStyle/>
                <NumberOfFonts
                    n={this.numberOfFonts()}/>

                <div>
                    {this.getMatchingFont()}
                </div>
            </div>
        );
    }
}



export default connect(
    state => ({
        fonts: getFilteredFonts(state),
        match: getMatch(state)
    })
)(Filter);

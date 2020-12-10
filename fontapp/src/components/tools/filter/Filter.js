import './Filter.scss';
import FontCategory from "./font-category/FontCategory";
import FontStyle from "./font-style/FontStyle";
import NumberOfFonts from "./number-of-fonts/NumberOfFonts";
import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.categories = [
            {
                id: 1,
                title: 'Sans Serif'
            }, {
                id: 2,
                title: 'Serif'
            }, {
                id: 3,
                title: 'Slab Serif'
            }, {
                id: 4,
                title: 'Monospace'
            }, {
                id: 5,
                title: 'Script'
            }, {
                id: 6,
                title: 'Fun'
            }
        ];
        this.styles = [
            {
                id: 1,
                title: 'Normal'
            }, {
                id: 2,
                title: 'Italic'
            }
        ];
        this.state = {
            currentCategory: this.categories[0],
            currentStyle: this.styles[0]
        };
    }

    setCurrentCategory = (event) => {
        let cat = this.categories.find(c => c.id === Number(event.target.value));
        if (cat) {
            this.setState({
                currentCategory: cat
            });
        }
    };

    setCurrentStyle= (event) => {
        let style = this.styles.find(c => c.id === Number(event.target.value));
        if (style) {
            this.setState({
                currentStyle: style
            });
        }
    };

    filteredFonts() {
        return this.props.fonts.filter(font => {
            return font[3] === this.state.currentCategory.title && font[10] === this.state.currentStyle.title;
        })
    }

    numberOfFonts(){
        return this.filteredFonts().length;
    };

    render() {
        return (
            <div className="Filter">
                <FontCategory
                    setCurrentCategory={this.setCurrentCategory}
                    categories={this.categories}
                    currentCategory={this.state.currentCategory}/>
                <FontStyle
                    setCurrentStyle={this.setCurrentStyle}
                    styles={this.styles}
                    currentStyle={this.state.currentStyle}/>
                <NumberOfFonts
                    n={this.numberOfFonts()}/>
            </div>
        );
    }
}

export default Filter;
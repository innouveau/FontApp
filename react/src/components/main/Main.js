import './Main.scss';
import Tools from './tools/Tools';
import fonts from 'data/fonts'
import parameters from 'data/parameters'
import {addFont, addParameter, addBox } from 'store/actions'
import React, { Component } from "react";
import store from "store";
import Desk from "./desk/Desk";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false}
    }

    componentDidMount() {
        this.init();
    }

    init(){
        this.addWebfonts();
        this.addFonts();
        this.addParameters();
        this.addBoxes();
        console.log('fonts: ' + fonts.length, store.getState().fonts.all.length);
        console.log('parameters: ' + parameters.length, store.getState().parameters.all.length);
    }

    addWebfonts() {
        const script = document.createElement("script");
        script.src = "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js";
        script.async = true;
        document.body.appendChild(script);
        this.setState({loaded: true});
    }

    addBoxes() {
        let boxes = [
            {left: 100, top: 70, width: 300, height: 200, string: 'The quick brown fox...', font_id: 294},
            {left: 100, top: 200, string: '...jumps over a lazy dog', font_id: 644}
        ];
        for (let box of boxes) {
            store.dispatch(addBox(box))
        }
    }

    addFonts() {
        for (let font of fonts) {
            store.dispatch(addFont(font))
        }
    }

    addParameters() {
        for (let parameter of parameters) {
            store.dispatch(addParameter(parameter))
        }
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="page">
                    <Tools/>
                    <Desk/>
                </div>
            );
        } else {
            return (
                <div className="page">Loading...</div>
            )
        }
    }
}


export default Main;
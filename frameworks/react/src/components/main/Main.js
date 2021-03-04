import './Main.scss';
import Tools from './tools/Tools';
import fonts from './../../../../../shared/data/fonts'
import parameters from './../../../../../shared/data/parameters'
import boxes from './../../../../../shared/data/boxes'
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
        this.addFonts();
        this.addParameters();
        this.addBoxes();
        this.setState({loaded: true});
        console.log('fonts: ' + fonts.length, store.getState().fonts.all.length);
        console.log('parameters: ' + parameters.length, store.getState().parameters.all.length);
    }

    addBoxes() {
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
import './App.scss';
import Tools from './components/tools/Tools';
import fonts from './data/fonts'
import parameters from './data/parameters'
import {addFont, addParameter, addBox } from './store/actions'
import React, { Component } from "react";
import store from "./store";
import Desk from "./components/desk/Desk";


class App extends Component {
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
            {left: 100, top: 70, string: 'Hello'},
            {left: 100, top: 200, string: 'World'}
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
                <div className="App">
                    <Tools/>
                    <Desk/>
                </div>
            );
        } else {
            return (
                <div className="App">Loading...</div>
            )
        }
    }
}


export default App;
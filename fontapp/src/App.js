import './App.scss';
import Tools from './components/tools/Tools';
import fonts from './data/fonts'
import parameters from './data/parameters'
import {addFont, addParameter} from './store/actions'
import React, { Component } from "react";
import store from "./store";


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.init();
    }

    init(){
        this.addFonts();
        this.addParameters();
        console.log('fonts: ' + fonts.length, store.getState().fonts.all.length);
        console.log('parameters: ' + parameters.length, store.getState().parameters.all.length);
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
        return (
            <div className="App">
                <Tools/>
            </div>
        );
    }
}


export default App;
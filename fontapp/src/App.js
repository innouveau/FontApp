import './App.scss';
import Tools from './components/tools/Tools';
import fonts from './data/fonts'
import {addFont} from './store/actions'
import { connect } from 'react-redux'
import React, { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        for (let font of fonts) {
            this.props.addFont(font);
        }

        return (
            <div className="App">
                <Tools/>
            </div>
        );
    }
}


export default connect(
    null,
    { addFont }
)(App)

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from "./components/about/About";
import Main from "./components/main/Main";
import './App.scss';

const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    </div>
);

export default App;
import './App.scss';
import Main from "./components/main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about/About";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Link
                    className="test"
                    to="/about">About
                </Link>

                <Switch>
                    <Route path="/">
                        <Main/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
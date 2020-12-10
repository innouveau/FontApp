import './App.scss';
import Tools from './components/tools/Tools';
import fonts from './data/fonts'

function App() {
    return (
        <div className="App">
            <Tools
                fonts={fonts}/>
        </div>
    );
}

export default App;

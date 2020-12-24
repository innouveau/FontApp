import './Paper.scss';
import Box from "./box/Box";
import {Component} from "react";
import {connect} from "react-redux";
import {getBoxes} from "../../../store/selectors";
import store from "../../../store";
import {setBoxCurrent} from "../../../store/actions";

class Paper extends Component {
    constructor(props) {
        super(props);
    }

    clickOutside() {
        store.dispatch(setBoxCurrent(null));
    }

    render(){
        return (
            <div className="Paper">
                <div
                    onClick={this.clickOutside.bind(this)}
                    className="Paper__outside"/>
                {this.props.boxes.map(box =>
                    <Box
                        key={box.id}
                        box={box}/>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({ boxes: getBoxes(state) })
)(Paper);
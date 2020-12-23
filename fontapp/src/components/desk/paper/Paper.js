import './Paper.scss';
import Box from "./box/Box";
import {Component} from "react";
import {connect} from "react-redux";
import {getBoxes} from "../../../store/selectors";

class Paper extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="Paper">
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
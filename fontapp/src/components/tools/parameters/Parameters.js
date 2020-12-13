import './Parameters.scss';
import {Component} from "react";
import {connect} from "react-redux";
import {getParameters} from "../../../store/selectors";
import Parameter from "./parameter/Parameter";

class Parameters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Parameters tool-box">
                {this.props.parameters.map(parameter =>
                    <Parameter
                        key={parameter.id}
                        parameter={parameter}/>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({ parameters: getParameters(state) })
)(Parameters);
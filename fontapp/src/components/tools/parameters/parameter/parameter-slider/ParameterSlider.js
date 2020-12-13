import './ParameterSlider.scss';
import Slider from '@material-ui/core/Slider';
import {Component} from "react";
import {connect} from "react-redux";
import {updateProperty} from "../../../../../store/actions";
import {getCurrentParameterValue} from "../../../../../store/selectors";

const mapStateToProps = state => {
    return { value: getCurrentParameterValue(state)};
};

class ParameterSlider extends Component {
    constructor(props) {
        super(props);
    }

    update = (value) => {
        console.log(value);
        // this.props.updateProperty({key: this.props.parameter.title, value});
    };

    render() {
        return (
            <div className="ParameterSlider">
                <Slider
                    value={this.props.value}
                    onChange={(e) => {
                        this.update(e.target.value)
                    }}
                    aria-labelledby="continuous-slider" />
            </div>
        );
    }


}

export default connect(
    mapStateToProps,
    { updateProperty }
)(ParameterSlider)
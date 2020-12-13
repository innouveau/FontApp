import './ParameterSlider.scss';
import Slider from '@material-ui/core/Slider';
import {updateParameter} from "../../../../../store/actions";
import store from "../../../../../store";


function ParameterSlider(props) {

    const update = (event, value) => {
        store.dispatch(updateParameter({parameter: props.parameter, value}))
    };

    return (
        <div className="ParameterSlider">
            <Slider
                value={props.parameter.value}
                onChange={update}
                aria-labelledby="continuous-slider" />
        </div>
    );
}

export default ParameterSlider
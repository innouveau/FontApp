import './ParameterSlider.scss';
import Slider from '@material-ui/core/Slider';
import {updateParameter} from "../../../../../store/actions";
import { useDispatch } from "react-redux";


const ParameterSlider = (props) => {
    const dispatch = useDispatch();

    const update = (event, value) => {
        dispatch(updateParameter({parameter: props.parameter, value}))
    };

    return (
        <div className="ParameterSlider">
            <Slider
                value={props.parameter.value}
                onChange={update}
                aria-labelledby="continuous-slider" />
        </div>
    );
};

export default ParameterSlider
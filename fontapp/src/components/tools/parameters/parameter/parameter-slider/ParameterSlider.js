import './ParameterSlider.scss';
import Slider from '@material-ui/core/Slider';
import {updateParameter, updateBox} from "store/actions";
import {getBestMatch} from "store/selectors";
import {useDispatch, useSelector} from "react-redux";


const ParameterSlider = (props) => {
    const dispatch = useDispatch();

    const bestMatch = useSelector(state => getBestMatch(state));
    const currentBoxId = useSelector(state => state.boxes.current_id);

    const update = (event, value) => {
        dispatch(updateParameter({parameter: props.parameter, value}));
        dispatch(updateBox({id: currentBoxId, property: 'font_id', value: bestMatch.id}));
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
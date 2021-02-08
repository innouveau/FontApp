import './ParameterToggle.scss';
import {toggleParameter, updateBox} from "store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getBestMatch} from "store/selectors";


const ParameterToggle = (props) => {
    const dispatch = useDispatch();

    const bestMatch = useSelector(state => getBestMatch(state));
    const currentBoxId = useSelector(state => state.boxes.current_id);

    const update = () => {
        dispatch(toggleParameter(props.parameter));
        dispatch(updateBox({id: currentBoxId, property: 'font_id', value: bestMatch.id}));
    };

    return (
        <div
            onClick={() => update()}
            className="ParameterToggle"></div>
    );
};

export default ParameterToggle;
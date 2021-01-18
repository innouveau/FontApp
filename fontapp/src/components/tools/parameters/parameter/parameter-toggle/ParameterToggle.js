import './ParameterToggle.scss';
import {toggleParameter} from "../../../../../store/actions";
import { useDispatch } from "react-redux";

const ParameterToggle = (props) => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(toggleParameter(props.parameter))}
            className="ParameterToggle"></div>
    );
};

export default ParameterToggle;
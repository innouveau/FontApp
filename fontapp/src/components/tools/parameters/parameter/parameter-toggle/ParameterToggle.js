import './ParameterToggle.scss';
import store from "../../../../../store";
import {toggleParameter} from "../../../../../store/actions";

function ParameterToggle(props) {

    const toggle = () => {
        store.dispatch(toggleParameter({parameter: props.parameter}))
    };

    return (
        <div
            onClick={toggle}
            className="ParameterToggle"></div>
    );
}

export default ParameterToggle;
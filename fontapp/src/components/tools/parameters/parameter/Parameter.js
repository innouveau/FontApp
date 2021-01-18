import './Parameter.scss';
import ParameterToggle from "./parameter-toggle/ParameterToggle";
import ParameterSlider from "./parameter-slider/ParameterSlider";

const Parameter = (props) => {
    return (
        <div className={`Parameter ${!props.parameter.active ? 'Parameter--inactive' : '' }`}>
            <div className="Paramater__title">
                {props.parameter.title}
            </div>
            <ParameterSlider
                parameter={props.parameter}/>
            <ParameterToggle
                parameter={props.parameter}/>
        </div>
    );
};

export default Parameter;
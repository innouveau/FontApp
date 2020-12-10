import './ParameterSlider.scss';
import Slider from '@material-ui/core/Slider';

function ParameterSlider(props) {
    const handleChange = (event) => {
        // console.log(event);
    };

    return (
        <div className="ParameterSlider">
            <Slider
                value={props.parameter.value}
                onChange={handleChange}
                aria-labelledby="continuous-slider" />
        </div>
    );
}

export default ParameterSlider;
import './AlignButton.scss';
import {useDispatch, useSelector} from "react-redux";
import {updateBox} from 'store/actions'
import {getCurrentBox} from 'store/selectors';
import Ripples from 'react-ripples'
import images from "shared/images";

const AlignButton = (props) => {
    const dispatch = useDispatch();

    const currentBoxId = useSelector(state => state.boxes.current_id);

    const currentBox = useSelector(state => getCurrentBox(state));

    const isActive = () => {
        return currentBox && currentBox.textAlign === props.textAlign;
    };

    const update = () => {
        dispatch(updateBox({id: currentBoxId, property: 'textAlign', value: props.textAlign}));
    };

    const image = images.align[props.textAlign];

    return (
        <Ripples>
            <div
                onClick={() => update()}
                className={`AlignButton ${isActive() ? "AlignButton--active" : ""}`}>
                <img
                    src={image}
                    alt={`align ${props.textAlign}`}/>
            </div>
        </Ripples>
    );
};

export default AlignButton;

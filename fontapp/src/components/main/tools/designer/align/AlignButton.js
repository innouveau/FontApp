import './AlignButton.scss';
import {useDispatch, useSelector} from "react-redux";
import {updateBox} from 'store/actions'
import {getCurrentBox} from 'store/selectors';

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

    return (
        <div
            onClick={() => update()}
            className={`AlignButton ${isActive() ? "AlignButton--active" : ""}`}>
            <img
                src={`icons/align-${props.textAlign}.svg`}
                alt={`align ${props.textAlign}`}/>
        </div>
    );
};

export default AlignButton;
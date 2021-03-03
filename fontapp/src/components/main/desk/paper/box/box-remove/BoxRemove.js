import './BoxRemove.scss';
import {useDispatch} from "react-redux";
import {deleteBox} from "store/actions";

const BoxRemove = (props) => {
    const margin = 36;
    const size = 24;

    const dispatch = useDispatch();

    const removeBox = () => dispatch(deleteBox(props.box.id));

    return (
        <div
            onClick={() => removeBox()}
            style={{
                left: (props.box.left + margin) + 'px',
                top: (props.box.top - size) + 'px',
                width: (size) + 'px',
                height: (size) + 'px'
            }}
            className="BoxRemove">
            ×
        </div>
    );
};

export default BoxRemove;
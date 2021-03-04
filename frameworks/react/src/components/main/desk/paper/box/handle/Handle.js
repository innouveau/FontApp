import './Handle.scss';
import {updateBox} from 'store/actions'
import ResizableRect from "react-resizable-rotatable-draggable";
import { useDispatch } from "react-redux";

const Handle = (props) => {
    const dispatch = useDispatch();

    const size = 24;
    const margin = 8;

    const handleDrag = (deltaX, deltaY) => {
        dispatch(updateBox({id: props.box.id, property: 'left', value: (props.box.left + deltaX)}));
        dispatch(updateBox({id: props.box.id, property: 'top', value: (props.box.top + deltaY)}));
    };

    return (
        <div className="Handle">
            <ResizableRect
                left={props.box.left + margin}
                top={props.box.top - size}
                width={size}
                height={size}
                onDrag={handleDrag}/>
            <div
                style={{
                    left: (props.box.left + margin) + 'px',
                    top: (props.box.top - size) + 'px',
                    width: (size) + 'px',
                    height: (size) + 'px'
                }}
                className="Handle__icon">
                <div className="Handle__bar"></div>
                <div className="Handle__bar"></div>
                <div className="Handle__bar"></div>
            </div>
        </div>
    )
};

export default Handle

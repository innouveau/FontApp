import './Box.scss';
import Text from "./text/Text";
import ResizableRect from 'react-resizable-rotatable-draggable'
import {updateBox, setBoxCurrent} from "../../../../store/actions";
import Handle from "./handle/Handle";
import { useDispatch, useSelector } from "react-redux";


const Box = (props) => {
    const dispatch = useDispatch();

    const currentBoxId = useSelector(state => state.boxes.current_id);

    const handleResize = (style) => {
        let { top, left, width, height } = style;
        top = Math.round(top);
        left = Math.round(left);
        width = Math.round(width);
        height = Math.round(height);
        dispatch(updateBox({id: props.box.id, property: 'left', value: left}));
        dispatch(updateBox({id: props.box.id, property: 'top', value: top}));
        dispatch(updateBox({id: props.box.id, property: 'width', value: width}));
        dispatch(updateBox({id: props.box.id, property: 'height', value: height}));
    };

    const isCurrent = () => {
        return props.box.id === currentBoxId;
    };

    const setCurrent = () => {
        dispatch(setBoxCurrent(props.box.id));
    };

    const getBox = () => {
        if (isCurrent()) {
            return <ResizableRect
                left={props.box.left}
                top={props.box.top}
                width={props.box.width}
                height={props.box.height}
                zoomable='n, w, s, e, nw, ne, se, sw'
                onResize={handleResize}/>
        }
    };

    const getHandle = () => {
        if (isCurrent()) {
            return <Handle
                box={props.box}/>
        }
    };

    return (
        <div
            className="Box"
            onClick={setCurrent}>

            {getBox()}

            <Text
                box={props.box}/>

            {getHandle()}
        </div>
    )
};


export default Box;
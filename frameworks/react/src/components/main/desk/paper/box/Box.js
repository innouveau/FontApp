import './Box.scss';
import Text from "./text/Text";
import ResizableRect from 'react-resizable-rotatable-draggable'
import {updateBox, setBoxCurrent} from "store/actions";
import {getMaxZIndex} from "store/selectors";
import Handle from "./handle/Handle";
import { useDispatch, useSelector } from "react-redux";
import BoxRemove from "./box-remove/BoxRemove";


const Box = (props) => {
    const dispatch = useDispatch();

    const currentBoxId = useSelector(state => state.boxes.current_id);

    const maxZIndex = useSelector(state => getMaxZIndex(state));

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
        dispatch(updateBox({id: props.box.id, property: 'zIndex', value: maxZIndex}));
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


    return (
        <div
            className="Box"
            style={{zIndex: props.box.zIndex}}
            onClick={setCurrent}>

            {getBox()}

            <Text
                box={props.box}/>

            {isCurrent() ? <Handle box={props.box}/> : null}
            {isCurrent() ? <BoxRemove box={props.box}/> : null}
        </div>
    )
};


export default Box;
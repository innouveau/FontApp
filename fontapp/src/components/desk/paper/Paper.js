import './Paper.scss';
import Box from "./box/Box";
import {getBoxes} from "store/selectors";
import {setBoxCurrent} from "store/actions";
import { useDispatch, useSelector } from "react-redux";

const Paper = () => {
    const dispatch = useDispatch();

    const clickOutside = () => {
        dispatch(setBoxCurrent(null));
    };

    const boxes = useSelector(state => getBoxes(state));

    return (
        <div className="Paper">
            <div
                onClick={clickOutside}
                className="Paper__outside"/>
            {boxes.map(box =>
                <Box
                    key={box.id}
                    box={box}/>
            )}
        </div>
    )
};

export default Paper;
import './FontSize.scss';
import Slider from "@material-ui/core/Slider";
import { getCurrentBox} from "store/selectors";
import {updateBox} from 'store/actions'
import { useSelector, useDispatch } from "react-redux";


const FontSize = () => {
    const dispatch = useDispatch();

    const currentBox = useSelector(state => getCurrentBox(state));

    const update = (value) =>{
        dispatch(updateBox({id: currentBox.id, property: 'fontSize', value}));
    };

    const fontSize = currentBox ? currentBox.fontSize : 50;

    return (
        <div className="FontSize">
            <div className={'designer__label'}>
                Font Size
            </div>
            <Slider
                value={fontSize}
                onChange={(event, value) => {
                    update(value)
                }}
                aria-labelledby="continuous-slider" />
        </div>
    )
};

export default FontSize;
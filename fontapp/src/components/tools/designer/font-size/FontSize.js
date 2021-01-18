import './FontSize.scss';
import Slider from "@material-ui/core/Slider";
import { getCurrentFontSize} from "../../../../store/selectors";
import {updateProperty} from './../../../../store/actions'
import { useSelector, useDispatch } from "react-redux";


const FontSize = () => {
    const dispatch = useDispatch();

    const update = (value) =>{
        dispatch(updateProperty({key: 'fontSize', value}));
    };

    const fontSize = useSelector(state => getCurrentFontSize(state));

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
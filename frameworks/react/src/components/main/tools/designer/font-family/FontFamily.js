import './FontFamily.scss';
import {getCurrentFont} from "store/selectors";
import { useSelector } from "react-redux";

const FontFamily = () => {

    const font = useSelector(state => getCurrentFont(state));

    return (
        <div className="FontFamily">
            {font ? (font.title + '(' + font.weight + ')') : '-'}
        </div>
    )
};

export default FontFamily;
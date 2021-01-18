import './FontStyle.scss';
import {updateProperty} from "../../../../store/actions";
import {getCurrentStyle} from '../../../../store/selectors';
import { useSelector, useDispatch } from "react-redux";

const FontStyle = () => {
    const dispatch = useDispatch();

    const styles = [
        'Normal',
        'Italic'
    ];

    const currentStyle = useSelector(state => getCurrentStyle(state));

    const update = (value) => {
        dispatch(updateProperty({key: 'style', value}));
    };

    return (
        <div className="FontStyle">
            <select
                value={currentStyle}
                onChange={(e) => {
                    update(e.target.value)
                }}>
                {styles.map(style =>
                    <option
                        key={style}
                        value={style}>{style}</option>
                )}
            </select>
        </div>
    )
};

export default FontStyle;
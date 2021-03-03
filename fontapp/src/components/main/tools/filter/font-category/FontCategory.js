import './FontCategory.scss';
import {updateProperty, updateBox} from "store/actions";
import {getCurrentCategory, getBestMatch} from 'store/selectors';
import { useSelector, useDispatch } from "react-redux";
// import Select from '@material-ui/core/Select';

const FontCategory = () => {
    const dispatch = useDispatch();

    const categories = [
        'Sans Serif',
        'Serif',
        'Slab Serif',
        'Monospace',
        'Script',
        'Fun'
    ];

    const currentCategory = useSelector(state => getCurrentCategory(state));

    const bestMatch = useSelector(state => getBestMatch(state));
    const currentBoxId = useSelector(state => state.boxes.current_id);

    const update = (value) => {
        dispatch(updateProperty({key: 'category', value}));
        dispatch(updateBox({id: currentBoxId, property: 'font_id', value: bestMatch.id}));
    };

    return (
        <div className="FontCategory">
            <select
                value={currentCategory}
                onChange={(e) => {
                    update(e.target.value)
                }}>
                {categories.map(category =>
                    <option
                        key={category}
                        value={category}>{category}</option>
                )}
            </select>
        </div>
    )
};

export default FontCategory;



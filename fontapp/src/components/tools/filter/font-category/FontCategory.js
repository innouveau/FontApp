import './FontCategory.scss';
import {updateProperty} from "store/actions";
import {getCurrentCategory} from 'store/selectors';
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

    const update = (value) => {
        dispatch(updateProperty({key: 'category', value}));
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



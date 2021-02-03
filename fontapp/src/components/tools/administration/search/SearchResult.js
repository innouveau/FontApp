import './SearchResult.scss';
import {useDispatch, useSelector} from "react-redux";
import {updateBox, setFontSearch} from 'store/actions'
import {getCurrentBox} from 'store/selectors';

const SearchResult = (props) => {
    const dispatch = useDispatch();

    const currentBox = useSelector(state => getCurrentBox(state));

    const select = () => {
        dispatch(setFontSearch(''));
        dispatch(updateBox({id: currentBox.id, property: 'font_id', value: props.font.id}));
    };

    return (
        <div
            onClick={select}
            className="SearchResult">
            {props.font.title} ({props.font.weight}) ({props.font.style})
        </div>
    );
};

export default SearchResult;
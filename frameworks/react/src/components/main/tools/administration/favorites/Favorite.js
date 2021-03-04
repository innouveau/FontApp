import './Favorite.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentFont, getCurrentBox} from "store/selectors";
import {updateBox} from 'store/actions'

const Favorite = (props) => {
    const dispatch = useDispatch();

    const currentFont = useSelector(state => getCurrentFont(state));

    const currentBox = useSelector(state => getCurrentBox(state));


    const isCurrent = () => {
        return currentFont && currentFont.id === props.favorite.id;
    };

    const select = () => {
        dispatch(updateBox({id: currentBox.id, property: 'font_id', value: props.favorite.id}));
    };

    return (
        <div
            onClick={() => select()}
            className={`Favorite ${isCurrent() ? "Favorite--active" : ""}`}>
            {props.favorite.title} ({props.favorite.weight})
        </div>
    );
};

export default Favorite;
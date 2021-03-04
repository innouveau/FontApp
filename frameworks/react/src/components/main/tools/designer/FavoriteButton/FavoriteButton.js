import './FavoriteButton.scss';
import {useDispatch, useSelector} from "react-redux";
import {addFavorite} from "store/actions";
import {getCurrentFont} from "store/selectors";

const FavoriteButton = () => {
    const dispatch = useDispatch();

    const currentFont = useSelector(state => getCurrentFont(state));

    const favorites = useSelector(state => state.favorites.all);

    const select = () => {
        if (!isFavorite()) {
            dispatch(addFavorite(currentFont));
        }
    };

    const isFavorite = () => {
        return currentFont && favorites.map(f => f.id).indexOf(currentFont.id) > -1;
    };

    return (
        <div
            onClick={() => select()}
            className={`FavoriteButton ${isFavorite() ? "FavoriteButton--inactive" : ""}`}></div>
    );
};

export default FavoriteButton;
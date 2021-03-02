import './Favorites.scss';
import Favorite from './Favorite';
import {useSelector} from "react-redux";


const Favorites = () => {
    const favorites = useSelector(state => state.favorites.all);

    return (
        <div className="Favorites tool-box">
            <div className="tool-box__title">
                Favorites
            </div>
            <div className="Favorites__list">
                {favorites.map(favorite =>
                    <Favorite
                        key={favorite.id}
                        favorite={favorite}/>
                )}
            </div>

        </div>
    );
};

export default Favorites;
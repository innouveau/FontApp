import './Favorites.scss';
import Favorite from './Favorite';
import {useSelector} from "react-redux";


const Favorites = () => {
    const favorites = useSelector(state => state.favorites.all);

    return (
        <div className="Favorites tool-box">
            {favorites.map(favorite =>
                <Favorite
                    key={favorite.id}
                    favorite={favorite}/>
            )}
        </div>
    );
};

export default Favorites;
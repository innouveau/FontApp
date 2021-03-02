import './Administration.scss';
import Search from "./search/Search";
import Favorites from "./favorites/Favorites";

const Administration = () => {
    return (
        <div className="Administration">
            <Search/>
            <Favorites/>
        </div>
    );
};

export default Administration;
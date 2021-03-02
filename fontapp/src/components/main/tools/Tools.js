import './Tools.scss';
import Identity from "./identity/Identity";
import Filter from "./filter/Filter";
import Parameters from "./parameters/Parameters";
import Designer from "./designer/Designer";
import {useSelector} from "react-redux";
import {getCurrentBox} from 'store/selectors';
import BoxTools from "./box-tools/BoxTools";
import Search from "./administration/search/Search";
import Favorites from "./administration/favorites/Favorites";

const Tools = () => {
    const currentBox = useSelector(state => getCurrentBox(state));


    return (
        <div className={`Tools ${currentBox ? "Tools--active" : ""}`}>
            <Identity/>
            <Filter/>
            <Parameters/>
            <Designer/>
            <Search/>
            <Favorites/>
            <BoxTools/>
        </div>
    );
};

export default Tools;

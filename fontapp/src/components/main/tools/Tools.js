import './Tools.scss';
import Identity from "./identity/Identity";
import Filter from "./filter/Filter";
import Parameters from "./parameters/Parameters";
import Designer from "./designer/Designer";
import Administration from "./administration/Administration";
import {useSelector} from "react-redux";
import {getCurrentBox} from 'store/selectors';

const Tools = () => {
    const currentBox = useSelector(state => getCurrentBox(state));


    return (
        <div className={`Tools ${currentBox ? "Tools--active" : ""}`}>
            <Identity/>
            <Filter/>
            <Parameters/>
            <Designer/>
            <Administration/>
        </div>
    );
};

export default Tools;

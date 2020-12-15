import './Tools.scss';
import Identity from "./identity/Identity";
import Filter from "./filter/Filter";
import Parameters from "./parameters/Parameters";
import Designer from "./designer/Designer";

function Tools() {
    return (
        <div className="Tools">
            <Identity/>
            <Filter/>
            <Parameters/>
            <Designer/>
        </div>
    );
}

export default Tools;

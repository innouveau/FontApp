import './Tools.scss';
import Identity from "./identity/Identity";
import Filter from "./filter/Filter";
import Parameters from "./parameters/Parameters";

function Tools(props) {
    return (
        <div className="tools">
            <Identity/>
            <Filter
                fonts={props.fonts}/>
            <Parameters/>
        </div>
    );
}

export default Tools;

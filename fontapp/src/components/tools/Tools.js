import './Tools.scss';
import Identity from "./identity/Identity";
import Filter from "./filter/Filter";

function Tools(props) {
    return (
        <div className="tools">
            <Identity/>
            <Filter
                fonts={props.fonts}/>
        </div>
    );
}

export default Tools;

import './Designer.scss';
import Align from "./align/Align";
import FontSize from "./font-size/FontSize";
import FontFamily from "./font-family/FontFamily";
import Color from "./color/Color";

const Designer = () => {
    return (
        <div className="Designer tool-box">
            <FontFamily/>
            <FontSize/>
            <Color/>
            <Align/>
        </div>
    );
};

export default Designer;
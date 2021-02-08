import './Designer.scss';
import Align from "./align/Align";
import FontSize from "./font-size/FontSize";
import FontFamily from "./font-family/FontFamily";

const Designer = () => {
    return (
        <div className="Designer tool-box">
            <FontFamily/>
            <FontSize/>
            <Align/>
        </div>
    );
};

export default Designer;
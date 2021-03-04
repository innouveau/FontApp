import './Designer.scss';
import Align from "./align/Align";
import FontSize from "./font-size/FontSize";
import FontFamily from "./font-family/FontFamily";
import Color from "./color/Color";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

const Designer = () => {
    return (
        <div className="Designer tool-box">
            <div className=" tool-box__row">
                <FontFamily/>
                <FavoriteButton/>
            </div>
            <FontSize/>
            <Color/>
            <Align/>
        </div>
    );
};

export default Designer;
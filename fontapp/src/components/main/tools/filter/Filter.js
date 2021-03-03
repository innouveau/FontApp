import './Filter.scss';
import FontCategory from "./font-category/FontCategory";
import FontStyle from "./font-style/FontStyle";
import NumberOfFonts from "./number-of-fonts/NumberOfFonts";

const Filter = () => {
    return (
        <div className="Filter tool-box">
            <FontCategory/>
            {/*<FontStyle/>*/}
            <NumberOfFonts/>
        </div>
    );
};

export default Filter;
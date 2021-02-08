import './Align.scss';
import AlignButton from "./AlignButton";

function Align() {
    const textAligns = ['left', 'center', 'right'];

    return (
        <div className="Align">
            {textAligns.map((textAlign, index) =>
                <AlignButton
                    key={index}
                    textAlign={textAlign}/>
            )}
        </div>
    );
}

export default Align;
import './Align.scss';
import AlignButton from "./AlignButton";

function Align() {
    const textAligns = ['left', 'center', 'right'];

    return (
        <div className="Align designer__row">
            <div className="designer__label">
                Text align
            </div>
            <div className="designer__content">
                {textAligns.map((textAlign, index) =>
                    <AlignButton
                        key={index}
                        textAlign={textAlign}/>
                )}
            </div>
        </div>
    );
}

export default Align;
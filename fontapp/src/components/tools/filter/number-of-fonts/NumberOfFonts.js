import './NumberOfFonts.scss';

function NumberOfFonts(props) {
    return (
        <div className="NumberOfFonts">
            {props.n} {props.n === 1 ? 'font' : 'fonts'} found
        </div>
    );
}

export default NumberOfFonts;
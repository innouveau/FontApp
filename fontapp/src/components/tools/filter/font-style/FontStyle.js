import './FontStyle.scss';

function FontStyle(props) {
    return (
        <div className="FontStyle">
            <select
                value={props.currentStyle.id}
                onChange={props.setCurrentStyle}>
                {props.styles.map(style =>
                    <option
                        key={style.id}
                        value={style.id}>{style.title}</option>
                )}
            </select>
        </div>
    );
}

export default FontStyle;
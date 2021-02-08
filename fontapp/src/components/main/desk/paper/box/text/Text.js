import './Text.scss';
import {getCurrentFontSize, getFontById} from "store/selectors";
import {updateBox} from 'store/actions'
import { useDispatch, useSelector } from "react-redux";

const Text = (props) => {
    const dispatch = useDispatch();

    const margin = 8;
    const fontSize = useSelector(state => getCurrentFontSize(state));
    const fontFamily = useSelector(state => getFontById(state, props.box.font_id));

    const fontFamilyTitle = () => {
        if (fontFamily) {
            return fontFamily.title;
        } else {
            return '';
        }
    };

    const getCorrectedFontSize = () => {
        return Math.round(fontSize * 400 / fontFamily.relativeFontSize);
    };

    const update = (value) => {
        dispatch(updateBox({id: props.box.id, property: 'string', value}));
    };

    return (
        <div
            style={{
                left: (props.box.left + margin) + 'px',
                top: (props.box.top + margin) + 'px',
                width: (props.box.width - ( 2 * margin)) + 'px',
                height: (props.box.height - ( 2 * margin)) + 'px',
                fontFamily: fontFamilyTitle()

            }}
            className="Text">
                <textarea
                    style={{
                        fontSize: getCorrectedFontSize() + 'px',
                        fontFamily: fontFamilyTitle(),
                        textAlign: props.box.textAlign
                    }}
                    value={props.box.string}
                    onChange={(event, value) => {
                        update(event.target.value)
                    }}/>
        </div>
    )
};

export default Text;

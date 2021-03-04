import './Text.scss';
import {getFontById} from "store/selectors";
import {updateBox, setFontLoaded} from 'store/actions'
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

const Text = (props) => {
    const dispatch = useDispatch();

    const margin = 8;
    const font = useSelector(state => getFontById(state, props.box.font_id));

    const getCorrectedFontSize = () => {
        return Math.round(props.box.fontSize * 400 / font.relativeFontSize);
    };

    const update = (value) => {
        dispatch(updateBox({id: props.box.id, property: 'string', value}));
    };

    useEffect(() => {
        // todo find a way to wait for window.WebFont
        if (font && !font.loaded && window.WebFont) {
            dispatch(setFontLoaded(font));
            window.WebFont.load({
                google : {
                    families : [font.title + ":" + font.weight]
                },
                loading : function() {},
                active : function(response) {

                },
                inactive : function() {}
            });
        }
    });

    return (
        <div
            style={{
                left: (props.box.left + margin) + 'px',
                top: (props.box.top + margin) + 'px',
                width: (props.box.width - ( 2 * margin)) + 'px',
                height: (props.box.height - ( 2 * margin)) + 'px'

            }}
            className="Text">
                <textarea
                    style={{
                        fontSize: getCorrectedFontSize() + 'px',
                        fontFamily: font.title,
                        fontWeight: font.weight,
                        textAlign: props.box.textAlign,
                        color: props.box.color
                    }}
                    value={props.box.string}
                    onChange={(event, value) => {
                        update(event.target.value)
                    }}/>
        </div>
    )
};

export default Text;

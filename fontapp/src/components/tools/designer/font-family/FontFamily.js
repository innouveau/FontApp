import './FontFamily.scss';
import {getMatch} from "store/selectors";
import {setFontLoaded} from "store/actions";
import { useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";


const FontFamily = () => {
    const dispatch = useDispatch();

    const font = useSelector(state => getMatch(state));

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
        <div className="FontFamily">
            {font ? font.title : '-'}
        </div>
    )
};

export default FontFamily;
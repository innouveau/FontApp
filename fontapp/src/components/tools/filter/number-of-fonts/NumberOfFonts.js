import './NumberOfFonts.scss';
import React from "react";
import { useSelector } from "react-redux";
import {getFilteredFonts} from "../../../../store/selectors";

const NumberOfFonts = () => {
    const n = useSelector(state => getFilteredFonts(state).length);

    return (
        <div className="NumberOfFonts">{n}</div>
    );
};

export default NumberOfFonts;
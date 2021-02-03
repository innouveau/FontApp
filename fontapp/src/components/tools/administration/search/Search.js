import './Search.scss';
import { useState } from 'react';
import SearchResults from "./SearchResults";
import {useDispatch, useSelector} from "react-redux";
import {getAllFonts} from "store/selectors";
import {setFontSearch} from "store/actions"

const Search = () => {
    const dispatch = useDispatch();

    const fonts = useSelector(state => getAllFonts(state));
    const search = useSelector(state => state.fonts.search);

    const setSearch = (value) => {
        dispatch(setFontSearch(value));
    };

    const getFonts = () => {
        return fonts.filter(font => {
            return font.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
        })
    };

    const showSearchResults = () => {
        return search.length > 0;
    };



    return (
        <div className="Search">
            <input
                placeholder="Search font..."
                onChange={e => setSearch(e.target.value)}
                value={search}/>
            {showSearchResults() > 0 ? <SearchResults fonts={getFonts()}/> : null }
        </div>
    );
};

export default Search;
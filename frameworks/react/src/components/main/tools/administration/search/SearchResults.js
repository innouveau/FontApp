import './SearchResults.scss';
import SearchResult from "./SearchResult";

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            {props.fonts.map((font, index) =>
                <SearchResult
                    key={index}
                    font={font}/>
            )}
        </div>
    );
};

export default SearchResults;
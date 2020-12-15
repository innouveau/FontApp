import './FontFamily.scss';
import {Component} from "react";
import {connect} from "react-redux";
import {getMatch} from "../../../../store/selectors";
import store from "../../../../store";
import {setFontLoaded} from "../../../../store/actions";

class FontFamily extends Component {
    constructor(props){
        super(props);
    }

    getMatchingFont() {
        if (this.props.match) {
            return this.props.match.title;
        } else {
            return '-';
        }
    }

    loadFont(font) {
        if (font && !font.loaded) {
            store.dispatch(setFontLoaded({font}));
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

    }

    componentDidUpdate() {
        this.loadFont(this.props.match);
    }

    render() {
        return (
            <div className="FontFamily">
                {this.getMatchingFont()}
            </div>
        );
    }

}

export default connect(
    state => ({
        match: getMatch(state)
    })
)(FontFamily);
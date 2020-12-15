import './Text.scss';
import {connect} from "react-redux";
import {Component} from "react";
import {getCurrentString, getCurrentFontSize, getMatch} from "../../../../../store/selectors";

const mapStateToProps = state => {
    return {
        string: getCurrentString(state),
        fontSize: getCurrentFontSize(state),
        fontFamily: getMatch(state)
    };
};

class Text extends Component {
    constructor(props) {
        super(props);
    }

    getMatchingFont() {
        if (this.props.fontFamily) {
            return this.props.fontFamily.title;
        } else {
            return '';
        }
    }

    getCorrectedFontSize() {
        return Math.round(this.props.fontSize * 400 / this.props.fontFamily.relativeFontSize);
    }

    render() {
        return (
            <div
                style={{
                    fontSize: this.getCorrectedFontSize() + 'px',
                    fontFamily: this.getMatchingFont()
                }}
                className="Text">
                {this.props.string}
            </div>
        );
    }


}

export default connect(
    mapStateToProps
)(Text)

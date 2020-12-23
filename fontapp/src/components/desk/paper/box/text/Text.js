import './Text.scss';
import {connect} from "react-redux";
import {Component} from "react";
import {getCurrentString, getCurrentFontSize, getMatch} from "../../../../../store/selectors";
import {updateBox} from './../../../../../store/actions'
import store from "../../../../../store";

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
        this.margin = 8;
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

    update(value) {
        store.dispatch(updateBox({id: this.props.box.id, property: 'string', value}));
    }

    render() {
        return (
            <div
                style={{
                    left: (this.props.box.left + this.margin) + 'px',
                    top: (this.props.box.top + this.margin) + 'px',
                    width: (this.props.box.width - ( 2 * this.margin)) + 'px',
                    height: (this.props.box.height - ( 2 * this.margin)) + 'px',
                    fontFamily: this.getMatchingFont()
                }}
                className="Text">
                <textarea
                    style={{
                        fontSize: this.getCorrectedFontSize() + 'px',
                        fontFamily: this.getMatchingFont()
                    }}
                    value={this.props.box.string}
                    onChange={(event, value) => {
                        this.update(event.target.value)
                    }}/>
            </div>
        );
    }


}

export default connect(
    mapStateToProps
)(Text)

import './Text.scss';
import {connect} from "react-redux";
import {Component} from "react";
import {getCurrentString, getCurrentFontSize, getMatch} from "../../../../../store/selectors";
import Slider from "@material-ui/core/Slider";
import {updateProperty} from './../../../../../store/actions'
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
        store.dispatch(updateProperty({key: 'string', value}));
    }

    render() {
        return (
            <div className="Text">
                <textarea
                    style={{
                        fontSize: this.getCorrectedFontSize() + 'px',
                        fontFamily: this.getMatchingFont()
                    }}
                    value={this.props.string}
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

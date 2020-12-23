import './Box.scss';
import Text from "./text/Text";
import ResizableRect from 'react-resizable-rotatable-draggable'
import {Component} from "react";
import { getCurrentFontSize, getCurrentString, getMatch } from "../../../../store/selectors";
import {connect} from "react-redux";
import store from "../../../../store";
import {updateBox} from "../../../../store/actions";
import Handle from "./handle/Handle";

const mapStateToProps = state => {
    return {
        width: state.settings.boxWidth,
        height: state.settings.boxHeight,
        top: state.settings.boxTop,
        left: state.settings.boxLeft,
    };
};

class Box extends Component {
    constructor(props) {
        super(props);
    }

    handleResize = (style) => {
        let { top, left, width, height } = style;
        top = Math.round(top);
        left = Math.round(left);
        width = Math.round(width);
        height = Math.round(height);
        store.dispatch(updateBox({id: this.props.box.id, property: 'left', value: left}));
        store.dispatch(updateBox({id: this.props.box.id, property: 'top', value: top}));
        store.dispatch(updateBox({id: this.props.box.id, property: 'width', value: width}));
        store.dispatch(updateBox({id: this.props.box.id, property: 'height', value: height}));
    };

    render(){
        return (
            <div
                className="Box">
                <ResizableRect
                    left={this.props.box.left}
                    top={this.props.box.top}
                    width={this.props.box.width}
                    height={this.props.box.height}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    onResize={this.handleResize}/>

                <Text
                    box={this.props.box}/>

                <Handle
                    box={this.props.box}/>
            </div>
        );
    }
}


export default connect(
    mapStateToProps
)(Box)
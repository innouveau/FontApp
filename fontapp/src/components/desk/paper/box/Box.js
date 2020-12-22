import './Box.scss';
import Text from "./text/Text";
import ResizableRect from 'react-resizable-rotatable-draggable'
import {Component} from "react";
import { getCurrentFontSize, getCurrentString, getMatch } from "../../../../store/selectors";
import {connect} from "react-redux";
import store from "../../../../store";
import {updateProperty} from "../../../../store/actions";

const mapStateToProps = state => {
    return {
        width: state.settings.boxWidth,
        height: state.settings.boxHeight,
        top: state.settings.boxTop,
        left: state.settings.boxLeft,
    };
};

class Box extends Component {
    constructor() {
        super();
    }

    handleResize = (style, isShiftKey, type) => {
        let { top, left, width, height } = style;
        top = Math.round(top);
        left = Math.round(left);
        width = Math.round(width);
        height = Math.round(height);
        store.dispatch(updateProperty({key: 'boxLeft', value: left}));
        store.dispatch(updateProperty({key: 'boxTop', value: top}));
        store.dispatch(updateProperty({key: 'boxWidth', value: width}));
        store.dispatch(updateProperty({key: 'boxHeight', value: height}));
    };

    handleDrag = (deltaX, deltaY) => {
        store.dispatch(updateProperty({key: 'boxLeft', value: (this.props.left + deltaX)}));
        store.dispatch(updateProperty({key: 'boxTop', value: (this.props.top + deltaY)}));
    };

    render(){
        return (
            <div className="Box">
                <div
                    className={'text-container'}
                    style={{
                        left: this.props.left + 'px',
                        top: this.props.top + 'px',
                        width: this.props.width + 'px',
                        height: this.props.height + 'px'
                    }}>
                    <Text/>
                </div>

                <ResizableRect
                    left={this.props.left}
                    top={this.props.top}
                    width={this.props.width}
                    height={this.props.height}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    onResize={this.handleResize}
                    onDrag={this.handleDrag}>

                </ResizableRect>
            </div>
        );
    }
}


export default connect(
    mapStateToProps
)(Box)
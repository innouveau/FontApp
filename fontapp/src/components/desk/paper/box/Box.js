import './Box.scss';
import Text from "./text/Text";
import ResizableRect from 'react-resizable-rotatable-draggable'
import {Component} from "react";
import {connect} from "react-redux";
import store from "../../../../store";
import {updateBox, setBoxCurrent} from "../../../../store/actions";
import Handle from "./handle/Handle";
import {getCurrentBoxId} from "../../../../store/selectors";

const mapStateToProps = state => {
    return {
        width: state.settings.boxWidth,
        height: state.settings.boxHeight,
        top: state.settings.boxTop,
        left: state.settings.boxLeft,
        currentBoxId: state.boxes.current_id
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

    isCurrent() {
        return this.props.box.id === this.props.currentBoxId;
    }

    setCurrent() {
        store.dispatch(setBoxCurrent(this.props.box.id));
    }

    render(){
        const getBox = () => {
            if (this.isCurrent()) {
                return <ResizableRect
                    left={this.props.box.left}
                    top={this.props.box.top}
                    width={this.props.box.width}
                    height={this.props.box.height}
                    zoomable='n, w, s, e, nw, ne, se, sw'
                    onResize={this.handleResize}/>
            }
        };

        const getHandle = () => {
            if (this.isCurrent()) {
                return <Handle
                    box={this.props.box}/>
            }
        };

        return (
            <div
                className="Box"
                onClick={this.setCurrent.bind(this)}>

                {getBox()}

                <Text
                    box={this.props.box}/>

                {getHandle()}
            </div>
        );
    }
}


export default connect(
    mapStateToProps
)(Box)
import './Handle.scss';
import {connect} from "react-redux";
import {Component} from "react";
import {getCurrentString, getCurrentFontSize, getMatch} from "../../../../../store/selectors";
import {updateBox} from './../../../../../store/actions'
import store from "../../../../../store";
import ResizableRect from "react-resizable-rotatable-draggable";

const mapStateToProps = state => {
    return {

    };
};

class Handle extends Component {
    constructor(props) {
        super(props);
        this.size = 24;
    }




    handleDrag = (deltaX, deltaY) => {
        store.dispatch(updateBox({id: this.props.box.id, property: 'left', value: (this.props.box.left + deltaX)}));
        store.dispatch(updateBox({id: this.props.box.id, property: 'top', value: (this.props.box.top + deltaY)}));
    };

    render() {
        return (
            <div className="Handle">
                <ResizableRect
                    left={this.props.box.left - this.size}
                    top={this.props.box.top - this.size}
                    width={this.size}
                    height={this.size}
                    onDrag={this.handleDrag}/>
            </div>

        );
    }


}

export default connect(
    mapStateToProps
)(Handle)

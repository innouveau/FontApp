import './FontSize.scss';
import Slider from "@material-ui/core/Slider";
import store from "../../../../store";
import {Component} from "react";
import {connect} from "react-redux";
import { getCurrentFontSize} from "../../../../store/selectors";
import {updateProperty} from './../../../../store/actions'

const mapStateToProps = state => {
    return {
        fontSize: getCurrentFontSize(state)
    };
};

class FontSize extends Component {
    constructor(props) {
        super(props);
    }

    update(value){
        store.dispatch(updateProperty({key: 'fontSize', value}));
    };

    render(){
        return (
            <div className="FontSize">
                <div className={'designer__label'}>
                    Font Size
                </div>
                <Slider
                    value={this.props.fontSize}
                    onChange={(event, value) => {
                        this.update(value)
                    }}
                    aria-labelledby="continuous-slider" />
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(FontSize)
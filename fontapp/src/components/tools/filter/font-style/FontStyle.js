import './FontStyle.scss';
import {connect} from "react-redux";
import {updateProperty} from "../../../../store/actions";
import React, {Component} from "react";
import {getCurrentStyle} from "../../../../store/selectors";


const mapStateToProps = state => {
    return { style: getCurrentStyle(state)};
};

class FontStyle extends Component {
    constructor(props) {
        super(props);
        this.styles = [
            'Normal',
            'Italic'
        ];
    }

    update(value) {
        this.props.updateProperty({key: 'style', value});
    }

    render() {
        return (
            <div className="FontStyle">
                <select
                    value={this.props.style}
                    onChange={(e) => {
                        this.update(e.target.value)
                    }}>
                    {this.styles.map(style =>
                        <option
                            key={style}
                            value={style}>{style}</option>
                    )}
                </select>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { updateProperty }
)(FontStyle)
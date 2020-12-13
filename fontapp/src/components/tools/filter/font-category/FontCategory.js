import './FontCategory.scss';
import React, { Component } from "react";
import {connect} from "react-redux";
import {updateProperty} from "../../../../store/actions";
import {getCurrentCategory} from '../../../../store/selectors';
// import Select from '@material-ui/core/Select';


const mapStateToProps = state => {
    return { category: getCurrentCategory(state)};
};

class FontCategory extends Component {
    constructor(props) {
        super(props);
        this.categories = [
            'Sans Serif',
            'Serif',
            'Slab Serif',
            'Monospace',
            'Script',
            'Fun'
        ];
    }

    update(value) {
        this.props.updateProperty({key: 'category', value});
    }

    render() {
        return (
            <div className="FontCategory">
                <select
                    value={this.props.category}
                    onChange={(e) => {
                        this.update(e.target.value)
                    }}>
                    {this.categories.map(category =>
                        <option
                            key={category}
                            value={category}>{category}</option>
                    )}
                </select>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { updateProperty }
)(FontCategory)



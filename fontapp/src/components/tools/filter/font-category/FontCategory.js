import './FontCategory.scss';
// import Select from '@material-ui/core/Select';

function FontCategory(props) {
    return (
        <div className="FontCategory">
            <select
                value={props.currentCategory.id}
                onChange={props.setCurrentCategory}>
                {props.categories.map(category =>
                    <option
                        key={category.id}
                        value={category.id}>{category.title}</option>
                )}
            </select>
        </div>
    );
}

export default FontCategory;
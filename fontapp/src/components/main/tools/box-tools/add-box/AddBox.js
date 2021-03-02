import './AddBox.scss';
import {useDispatch} from "react-redux";
import {addBox } from 'store/actions'

const AddBox = () => {
    const dispatch = useDispatch();

    const add = () => {
        const url = "http://www.randomtext.me/api/";

        fetch(url)
            .then(response => response.json())
            .then(result => {
                let words, string;
                words = result.text_out.split(' ');
                string = [words[2], words[3], words[4], words[5], words[6]].join(' ');
                string = string[0].toUpperCase() + string.substr(1, string.length - 1);
                const box = {left: 100, top: 70, width: 300, height: 200, string, font_id: 294};
                dispatch(addBox(box))
            });
    };

    return (
        <div
            onClick={() => add()}
            className="AddBox button">
            Add text element
        </div>
    );
};

export default AddBox;
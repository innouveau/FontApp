import './AddBox.scss';
import {useDispatch, useSelector} from "react-redux";
import {addBox, setBoxCurrent } from 'store/actions';
import {getMaxZIndex, getBoxes} from 'store/selectors';
import {useEffect} from "react";

const AddBox = () => {
    const dispatch = useDispatch();

    const maxZIndex = useSelector(state => getMaxZIndex(state));

    const boxes = useSelector(state => getBoxes(state));

    const onClick = () => {
        const url = "http://www.randomtext.me/api/";
        fetch(url)
            .then(response => response.json())
            .then(result => {
                let words, string;
                words = result.text_out.split(' ');
                string = [words[2], words[3], words[4], words[5], words[6]].join(' ');
                string = string[0].toUpperCase() + string.substr(1, string.length - 1);
                add(string);
            });
    };

    const add = (string) => {
        let box = {left: 100, top: 70, width: 300, height: 200, string, font_id: 294, zIndex: maxZIndex};
        dispatch(addBox(box));
    };

    return (
        <div
            onClick={() => onClick()}
            className="AddBox button">
            Add text element
        </div>
    );
};

export default AddBox;
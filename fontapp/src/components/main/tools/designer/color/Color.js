import './Color.scss';
import { ChromePicker } from 'react-color';
import {getCurrentBox} from 'store/selectors'
import {useDispatch, useSelector} from "react-redux";
import {updateBox} from "store/actions"
import {useState} from "react";

const Color = () => {
    const [isOpen, setOpen] = useState(false);

    const dispatch = useDispatch();

    const currentBox = useSelector(state => getCurrentBox(state));

    const color = currentBox ? currentBox.color: '#000';


    const update = (value) => {
        dispatch(updateBox({id: currentBox.id, property: 'color', value: value.hex}));
    };

    const open = () => {
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
    };

    return (
        <div className="Color designer__row">
            <div className="designer__label">
                Color
            </div>
            <div className="designer__content">
                <div
                    onClick={open}
                    style={{'backgroundColor': color}}
                    className="Color__swatch"/>
            </div>

            {isOpen ?
                <div className="Color__popup">
                    <div
                        onClick={close}
                        className="Color__close"/>
                    <ChromePicker
                        color={color}
                        onChangeComplete={update}/>
                </div>
                 : null
            }
        </div>
    );
};

export default Color;
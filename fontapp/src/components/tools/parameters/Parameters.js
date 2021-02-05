import './Parameters.scss';
import Parameter from "./parameter/Parameter";
import { useSelector } from "react-redux";
import {useEffect} from "react";
import {getCurrentFont} from 'store/selectors';
import {updateParameter} from "store/actions";
import { useDispatch } from "react-redux";


const Parameters = () => {
    const dispatch = useDispatch();

    const parameters = useSelector(state => state.parameters.all);
    const currentFont = useSelector(state => getCurrentFont(state));

    // todo this one triggers often twice, because a click on a box is also
    // a click outside on the currentbox
    const updateAfterFontChange = () => {

        for (let parameter of parameters) {
            let value;
            if (currentFont) {
                value = currentFont[parameter.key];
            } else {
                value = 50;
            }
            dispatch(updateParameter({parameter: parameter, value}))
        }
    };

    useEffect(updateAfterFontChange, [currentFont]);

    return (
        <div className="Parameters tool-box">
            {parameters.map(parameter =>
                <Parameter
                    key={parameter.id}
                    parameter={parameter}/>
            )}
        </div>
    )
};

export default Parameters;
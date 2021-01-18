import './Parameters.scss';
import Parameter from "./parameter/Parameter";
import { useSelector } from "react-redux";

const Parameters = () => {
    const parameters = useSelector(state => state.parameters.all);

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
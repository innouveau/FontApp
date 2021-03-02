import './BoxTools.scss';
import AddBox from "./add-box/AddBox";

const BoxTools = () => {
    return (
        <div className="BoxTools tool-box tool-box--always-active">
            <AddBox/>
        </div>
    );
};

export default BoxTools;
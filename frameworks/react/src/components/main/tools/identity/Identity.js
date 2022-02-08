import './Identity.scss';
import images from "shared/images";

const Identity = () => {
    return (
        <div className="Identity">
            <img
                className="Identity__logo" src={images.logo}
                alt="Logo FontApp"/>
        </div>
    );
};

export default Identity;

import './Identity.scss';
import logo from './logo_fontapp.jpg';

const Identity = () => {
    return (
        <div className="Identity">
            <img
                className="Identity__logo" src={logo}
                alt="Logo FontApp"/>
        </div>
    );
};

export default Identity;
import './Parameters.scss';
import Parameter from "./parameter/Parameter";

function Parameters() {
    const parameters = [
        {
            id: 1,
            title: 'Boldness',
            value: 50,
            key: 0,
            active: true
        }, {
            id: 2,
            title: 'Serif Size',
            value: 50,
            key: 0,
            active: false
        }, {
            id: 3,
            title: 'Width',
            value: 50,
            key: 0,
            active: false
        }, {
            id: 4,
            title: 'Roundness',
            value: 50,
            key: 0,
            active: false
        }, {
            id: 5,
            title: 'Ascender',
            value: 50,
            key: 0,
            active: false
        }
    ];

    return (
        <div className="Parameters tool-box">
            {parameters.map(p =>
                <Parameter
                    key={p.id}
                    parameter={p}/>
            )}
        </div>
    );
}

export default Parameters;
import {useState} from "react";
import '../styles/Experience.css'

function Experience() {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [expPoints, setExpPoints] = useState(['']);

    const addPoint = () => {
        setExpPoints([...expPoints, '']);
    }

    const removePoint = (index) => {
        if(expPoints.length > 1) {
            setExpPoints(expPoints.filter((_, i) => i !== index));
        }
    }

    const updatePoint = (index, value) => {
        const updatedPoints = expPoints.map((point, i) =>
            i === index ? value : point
        );
        setExpPoints(updatedPoints)
    }



    return (
        <div className="experience-container">
            <Input
                label={"Company:"}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={"Boston Dynamics"}
            />

            <Input
                label={"Position:"}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder={"AI/ML Researcher"}
            />

            <Input
                label={"Start Date:"}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                type={"date"}
            />

            <Input
                label={"End Date:"}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type={"date"}
            />

            <div className="experience-summary">
                <h2>Work Experience</h2>
                <ul className="experience-list">
                    {expPoints.map((point, index) => (
                        <li key={index} className="experience-point">
                            <div className="point-container">
                                <Input
                                    value={point}
                                    onChange={(e) => updatePoint(index, e.target.value)}
                                    placeholder={`Point ${index + 1}...`}
                                    className='experience-point-input'
                                />
                                {expPoints.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removePoint(index)}
                                        className="remove-point"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={addPoint}
                    className="add-point"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

function Input({label, value, onChange, type = 'text', placeholder}) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
        </label>
    )
}

export default Experience;
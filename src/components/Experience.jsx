import {useState} from "react";
import '../styles/Experience.css'

function Experience({ entry, onRemove, onUpdate }) {
    const updateField = (field, value) => {
        onUpdate({...entry, [field]: value})
    }

    const addPoint = () => {
        //copies all points, and adds an empty one.
        //onUpdate sends this new array to parent
        const updatedPoints = [...entry.expPoints, ''];
        onUpdate({...entry, expPoints: updatedPoints });
    }

    const removePoint = (index) => {
        if(entry.expPoints.length > 1) {
            //as long as the number of points that we have is bigger than one
            //we create an new array of points without the point at that specific index.
            const updatedPoints = entry.expPoints.filter((_, i) => i !== index);
            onUpdate({...entry, expPoints: updatedPoints });
        }
    }

    const updatePoint = (index, value) => {
        //for each index, it matches we use the new value, else we want to keep the original
        //this will replace a specific point at the given index
        const updatedPoints = entry.expPoints.map((point, i) => i === index ? value : point);
        onUpdate({...entry, expPoints: updatedPoints})
    }

    const handleSave = () => {
        onUpdate({...entry, isSaved: true})
    }

    const handleEdit = () => {
        onUpdate({...entry, isSaved: false})
    }

    if(entry.isSaved) {
        return (
            <div className="experience-compact">
                <span className="compact-title">{entry.company || "Company"}</span>
                <div className={"compact-buttons"}>
                    <button onClick={handleEdit} className="edit-btn">Edit</button>
                </div>
            </div>
        )
    }

    return (
        <div className="experience-container">
            <Input
                label={"Company:"}
                value={entry.company}
                onChange={(e) => updateField('company', e.target.value)}
                placeholder={"Boston Dynamics"}
            />

            <Input
                label={"Position:"}
                value={entry.position}
                onChange={(e) => updateField('position', e.target.value)}
                placeholder={"AI/ML Researcher"}
            />

            <Input
                label={"Start Date:"}
                value={entry.startDate}
                onChange={(e) => updateField('startDate', e.target.value)}
                type={"date"}
            />

            <Input
                label={"End Date:"}
                value={entry.endDate}
                onChange={(e) => updateField('endDate', e.target.value)}
                type={"date"}
            />

            <div className="experience-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onRemove} className="remove-entry">Remove</button>
            </div>

            <div className="experience-summary">
                <h2>Job Experience</h2>
                <ul className="experience-list">
                    {entry.expPoints.map((point, index) => (
                        <li key={index} className="experience-point">
                            <div className="point-container">
                                <Input
                                    value={point}
                                    onChange={(e) => updatePoint(index, e.target.value)}
                                    placeholder={`Point ${index + 1}...`}
                                    inputClassName='experience-point-input'
                                />
                                {entry.expPoints.length > 1 && (
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
                    Add Point
                </button>
            </div>
        </div>
    )
}

function Input({label, value, onChange, type = 'text', placeholder, inputClassName}) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={inputClassName}
            />
        </label>
    )
}

export default Experience;
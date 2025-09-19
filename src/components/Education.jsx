import {useState} from "react";
import '../styles/Education.css'

function Education({entry, onRemove, onUpdate}) {
    //onUpdate copies all existing properties from a current entry, use field to update that existing field with value
    //onUpdate sends pack to parent comp which is App
    const updateField = (field, value) => {
        onUpdate({...entry, [field]: value})
    }

    const handleSave = () => {
        onUpdate({...entry, isSaved: true})
    }

    const handleEdit = () => {
        onUpdate({...entry, isSaved: false})
    }

    if(entry.isSaved) {
        return (
            <div className="education-compact">
                <span className="compact-title">{entry.institution || 'Institution'}</span>
                <div className="compact-buttons">
                    <button onClick={handleEdit} className="edit-btn">Edit</button>
                </div>
            </div>
        )
    }

    return (
        <div className="education-container">
            <Input
                label={"Institution:"}
                value={entry.institution}
                onChange={(e) => updateField('institution', e.target.value)}
                placeholder={"Standford University"}
            />

            <Input
                label={"Title of Study:"} // No Need to really include the type of Study. Let's keep it simple.
                value={entry.study}
                onChange={(e) => updateField('study', e.target.value)}
                placeholder={"Software Engineering"}
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

            <div className="education-buttons">
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={onRemove} className="remove-entry">Remove</button>
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

export default Education;
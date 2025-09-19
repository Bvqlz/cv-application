import {useState} from "react";
import '../styles/General.css'

function General({ personalData, onUpdate }) {
    const updateField = (field, value) => {
        onUpdate({...personalData, [field]: value});
    }

    return (
        <div className="personal-container">
            <h1>Personal Info</h1>
            <Input
                label="First Name:"
                value={personalData.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                placeholder={"John"}
            />

            <Input
                label="Last Name:"
                value={personalData.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                placeholder={"Smith"}
            />

            <Input
                label={"Email:"}
                value={personalData.email}
                onChange={(e) => updateField('email', e.target.value)}
                type={"email"}
                placeholder={"amonguslover123@gmail.com"}
            />

            <Input
                label={"Phone Number:"}
                value={personalData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                type={"tel"}
                placeholder={"111-222-3333"}
            />
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

export default General
import {useState} from "react";
import '../styles/Education.css'

function Education() {
    const [institution, setInstitution] = useState('');
    const [study, setStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="education-container">
            <Input
                label={"Institution:"}
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder={"Standford University"}
            />

            <Input
                label={"Title of Study:"} // No Need to really include the type of Study. Let's keep it simple.
                value={study}
                onChange={(e) => setStudy(e.target.value)}
                placeholder={"Software Engineering"}
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
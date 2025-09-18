import {useState} from "react";
import '../styles/General.css'

function General() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div className="personal-container">
            <Input
                label="First Name:"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={"John"}
            />

            <Input
                label="Last Name:"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={"Smith"}
            />

            <Input
                label={"Email:"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                placeholder={"amonguslover123@gmail.com"}
            />

            <Input
                label={"Phone Number:"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
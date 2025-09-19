import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import CVPreview from './components/CVPreview'
import './App.css'

function App() {
    const [personalData, setPersonalData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })
    const [educationEntries, setEducationEntries] = useState([]);
    const [experienceEntries, setExperienceEntries] = useState([]);

    const addEducation = () => {
        setEducationEntries([...educationEntries, {
            id: crypto.randomUUID(),
            institution: '',
            study: '',
            startDate: '',
            endDate: '',
            isSaved: false
        }])
    }

    const addExperience = () => {
        setExperienceEntries([...experienceEntries, {
            id: crypto.randomUUID(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            expPoints: [''],
            isSaved: false
        }])
    }

    const removeEducation = (id) => {
        setEducationEntries(educationEntries.filter(entry => entry.id !== id));
    }

    const removeExperience = (id) => {
        setExperienceEntries(experienceEntries.filter(entry => entry.id !== id));
    }


  return (
        <div className="main-container">
            <div className="form-container">
                <General
                    personalData={personalData}
                    onUpdate={setPersonalData}
                />

                <div className="education-section">
                    <h1>Education</h1>
                    {educationEntries.map(entry => (
                        <Education
                            key={entry.id}
                            entry={entry}
                            onRemove={() => removeEducation(entry.id)}
                            onUpdate={(updatedEntry) => {
                                setEducationEntries(educationEntries.map(e => e.id === entry.id ? updatedEntry : e))
                            }}
                        />
                    ))}
                    <button onClick={addEducation}>Add Education</button>
                </div>

                <div className="experience-section">
                    <h1>Experience</h1>
                    {experienceEntries.map(entry => (
                        <Experience
                            key={entry.id}
                            entry={entry}
                            onRemove={() => removeExperience(entry.id)}
                            onUpdate={(updatedEntry) => {
                                setExperienceEntries(experienceEntries.map(e => e.id === updatedEntry.id ? updatedEntry : e))
                            }}
                        />
                    ))}
                    <button onClick={addExperience}>Add Experience</button>
                </div>
            </div>

            <div className="cv-container">
                <CVPreview
                    personalData={personalData}
                    educationEntries={educationEntries.filter(entry => entry.isSaved)}
                    experienceEntries={experienceEntries.filter(entry => entry.isSaved)}
                />
            </div>
        </div>
  )
}

export default App

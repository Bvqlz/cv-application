import '../styles/CVPreview.css'

function CVPreview({ personalData, educationEntries, experienceEntries }) {
    return (
        <div className="cv-preview">
            <div className="cv-header">
                <h1>{personalData.firstName} {personalData.lastName}</h1>
                <div className="cv-contact-info">
                    <p>{personalData.phone}</p>
                    <p>{personalData.email}</p>
                </div>
            </div>

            <div className="cv-section">
                <h2>Education</h2>
                {educationEntries.map(entry => (
                    <div key={entry.id} className="cv-entry">
                        <div className="entry-header">
                            <h3>{entry.institution}</h3>
                            <span className="entry-date">{entry.startDate} - {entry.endDate}</span>
                        </div>
                        <p className="entry-subheader">{entry.study}</p>
                    </div>
                ))}
            </div>

            <div className="cv-section">
                <h2>Experience</h2>
                {experienceEntries.map(entry => (
                    <div key={entry.id} className="cv-entry">
                        <div className="entry-header">
                            <h3>{entry.company}</h3>
                            <span className="entry-date">{entry.startDate} - {entry.endDate}</span>
                        </div>
                        <p className="entry-subheader">{entry.position}</p>
                        {entry.expPoints.filter(point => point.trim()).length > 0 && (
                            <ul className="experience-points">
                                {entry.expPoints.filter(point => point.trim()).map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CVPreview;
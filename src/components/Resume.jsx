import '../styles/resume.css'

function Resume({resumeContent}) {
  return (
    <div id="resume">

      <div className="general">

        <span className="full-name">{resumeContent.general.fullName}</span>
        <div className="contact-details">
          <span>{resumeContent.general.city}</span>
          <span>•</span>
          <span>{resumeContent.general.email}</span>
          <span>•</span>
          <span>{resumeContent.general.phoneNo}</span>
        </div>

      </div>

      <div className="education">

        <span className="section-title">Education</span>
        <hr />

        <div className="section-content">
          {resumeContent.education.map(experience => {
          return (
            <div className="educationExperience" key={experience.key}>
              <span>{experience.institutionName}</span>
              <span>{experience.place}</span>
              <span>{experience.degree}</span>
              <span>Graduation date: {experience.graduationDate}</span>
            </div>
          )
        })}
        </div>
        
      </div>

      <div className="professional">

        <span className="section-title">Professional Experience</span>
        <hr />

        <div className="section-content">
          {resumeContent.professionalExperience.map(experience => {
          return (
            <div className="section-content professionalExperience" key={experience.key}>
              <span>{experience.institutionName}</span>
              <span>{experience.place}</span>
              <span>{experience.role}</span>
              <span>{experience.dates}</span>
              <span>{experience.description}</span>
            </div>
          )
        })}
        </div>

      </div>

    </div>
  )
}

export default Resume
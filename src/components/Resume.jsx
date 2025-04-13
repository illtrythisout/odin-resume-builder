function Resume({resumeContent}) {
  console.log(resumeContent)
  return (
    <div id="resume">

      <div className="general">

        <span className="full-name">{resumeContent.general.fullName}</span>
        <div className="contact-details">
          <span>{resumeContent.general.city}</span>
          <span>{resumeContent.general.email}</span>
          <span>{resumeContent.general.phoneNo}</span>
        </div>

      </div>

      <div className="education">

        <span className="section-title">Education</span>
        <hr />

        {resumeContent.education.map(experience => {
          return (
            <div className="educationExperience">
              <span>{experience.institutionName}</span>
              <span>{experience.place}</span>
              <span>{experience.degree}</span>
              <span>Graduation date: {experience.graduationDate}</span>
            </div>
          )
        })}

      </div>

      <div className="professionalExperience">

      <span className="section-title">Professional Experience</span>
        <hr />

        {resumeContent.professionalExperience.map(experience => {
          return (
            <div className="educationExperience">
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
  )
}

export default Resume
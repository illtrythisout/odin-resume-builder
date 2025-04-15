import '../styles/builder.css'
import { useState } from 'react'
import InputSection from './input-section'

function Builder() {
  const inputSections = {
    personalInputs: {
      title: 'Personal Details',
      inputs: {
        fullName: {
          label: 'Full Name',
          placeholder: 'Enter Full Name',
        },
        city: {
          label: 'City',
          placeholder: 'Enter City (eg. City, Country)',
        },
        email: {
          label: 'Email',
          placeholder: 'Enter Email',
        },
        phoneNo: {
          label: 'Phone No.',
          placeholder: 'Enter Phone Number',
        },
      },
    },
    educationInputs: {
      title: 'Education',
      inputs: {
        institutionName: {
          label: 'School',
          placeholder: 'Enter Uni / School',
        },
        degree: {
          label: 'Degree',
          placeholder: 'Enter Degree',
        },
        place: {
          label: 'City',
          placeholder: 'Enter City (eg. City, Country)',
        },
        graduationDate: {
          label: 'Graduation Date',
          placeholder: 'Enter Graduation Date',
        },
      },
    },
    professionalInputs: {
      title: 'Professional Experience',
      inputs: {
        institutionName: {
          label: 'Company Name',
          placeholder: 'Enter Company Name',
        },
        role: {
          label: 'Position',
          placeholder: 'Enter Position Title',
        },
        place: {
          label: 'City',
          placeholder: 'Enter City (eg. City, Country)',
        },
        dates: {
          label: 'Dates',
          placeholder: 'Enter Dates Worked',
        },
        description: {
          label: 'Description',
          placeholder: 'Enter Description',
        },
      },
    },
  }

  const [isOpened, setIsOpened] = useState(0)

  return (
    <div id="builder">

      <h1>Resume Builder</h1>

      <div className="inputSections">
        {Object.keys(inputSections).map((inputSection, i) => {
        return (
          <InputSection inputSection={inputSections[inputSection]} isOpened={isOpened === i} onShow={() => setIsOpened(i)} key={Object.keys(inputSections)[i]}/>
        )
      })}
      </div>

    </div>
  )
}

export default Builder
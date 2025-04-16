import "../styles/builder.css";
import { useState } from "react";
import InputSection from "./Input-Section.jsx";

function Builder({ onUpdateResume, resumeContent }) {
  const inputSections = {
    personalInputs: {
      title: "Personal Details",
      inputs: {
        fullName: {
          label: "Full Name",
          placeholder: "Enter Full Name",
        },
        city: {
          label: "City",
          placeholder: "Enter City (eg. City, Country)",
        },
        email: {
          label: "Email",
          placeholder: "Enter Email",
        },
        phoneNo: {
          label: "Phone No.",
          placeholder: "Enter Phone Number",
        },
      },
    },
    educationInputs: {
      title: "Education",
      inputs: {
        institutionName: {
          label: "School",
          placeholder: "Enter Uni / School",
        },
        degree: {
          label: "Degree",
          placeholder: "Enter Degree",
        },
        place: {
          label: "City",
          placeholder: "Enter City (eg. City, Country)",
        },
        graduationDate: {
          label: "Graduation Date",
          placeholder: "Enter Graduation Date",
        },
      },
    },
    professionalInputs: {
      title: "Professional Experience",
      inputs: {
        institutionName: {
          label: "Company Name",
          placeholder: "Enter Company Name",
        },
        role: {
          label: "Position",
          placeholder: "Enter Position Title",
        },
        place: {
          label: "City",
          placeholder: "Enter City (eg. City, Country)",
        },
        dates: {
          label: "Dates",
          placeholder: "Enter Dates Worked",
        },
        description: {
          label: "Description",
          placeholder: "Enter Description",
        },
      },
    },
  };

  const [isOpened, setIsOpened] = useState(0);

  const handleSave = (sectionTitle, inputs) => {
    const updatedContent = { ...resumeContent };

    if (sectionTitle === "Personal Details") {
      updatedContent.general = { ...inputs };
    } else if (sectionTitle === "Education") {
      updatedContent.education = [
        ...resumeContent.education,
        { ...inputs, key: crypto.randomUUID() },
      ];
    } else if (sectionTitle === "Professional Experience") {
      updatedContent.professionalExperience = [
        ...resumeContent.professionalExperience,
        { ...inputs, key: crypto.randomUUID() },
      ];
    }

    onUpdateResume(updatedContent); // Update the global state in App
  };

  return (
    <div id="builder">
      <h1>Resume Builder</h1>

      <div className="input-sections">
        {Object.keys(inputSections).map((key, i) => (
          <InputSection
            inputSection={inputSections[key]}
            isOpened={isOpened === i}
            onShow={() => setIsOpened(i)}
            onSave={handleSave}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default Builder;
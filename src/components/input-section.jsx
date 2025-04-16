import { useState } from "react";

function InputSection({ inputSection, isOpened, onShow, onSave }) {
  const [inputs, setInputs] = useState(
    Object.keys(inputSection.inputs).reduce((acc, key) => {
      acc[key] = ""; // Initialize all inputs with empty strings
      return acc;
    }, {})
  );

  const handleInputChange = (e, key) => {
    setInputs({
      ...inputs,
      [key]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(inputSection.title, inputs); // Pass the section title and inputs to the parent
  };

  let openedClassName = isOpened ? "opened" : "closed";

  return (
    <div className={`input-section ${openedClassName}`}>
      <button className="input-title-btn" onClick={onShow}>
        <h2>{inputSection.title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
        </svg>
      </button>

      {isOpened ? (
        <div className="inputs-container">
          {Object.keys(inputSection.inputs).map((key) => (
            <div className="inputs" key={key}>
              <span>{inputSection.inputs[key].label}</span>
              <input
                type="text"
                placeholder={inputSection.inputs[key].placeholder}
                value={inputs[key]}
                onChange={(e) => handleInputChange(e, key)}
              />
            </div>
          ))}

          <button className="submit-inputs-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default InputSection;
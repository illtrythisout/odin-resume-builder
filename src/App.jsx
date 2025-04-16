import "./styles/base.css";
import Resume from "./components/Resume.jsx"
import Builder from "./components/Builder.jsx";
import { useState } from "react";
import { resumeContent as initialResumeContent } from "./resume-content.js"; // Import the initial content

function App() {
  const [resumeContent, setResumeContent] = useState(initialResumeContent);

  return (
    <main>
      <Builder onUpdateResume={setResumeContent} resumeContent={resumeContent} />
      <Resume resumeContent={resumeContent} />
    </main>
  );
}

export default App;
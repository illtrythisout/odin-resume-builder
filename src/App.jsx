import "./styles/base.css";
import Resume from "./components/resume";
import Builder from "./components/builder";
import { useState } from "react";
import { resumeContent as initialResumeContent } from "./resume-content"; // Import the initial content

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
import './styles/base.css'
import { resumeContent } from './resume-content'
import Resume from './components/resume'
import Builder from './components/builder'

function App() {
  return (
    <>
    <main>
      <Builder resumeContent={resumeContent}></Builder>
      <Resume resumeContent={resumeContent} />
    </main>
    </>
  )
}

export default App
import './styles/base.css'
import { resumeContent } from './resume-content'
import Resume from './components/resume'

function App() {
  return (
    <>
    <main>
      <Resume resumeContent={resumeContent} />
    </main>
    </>
  )
}

export default App
import { useState } from 'react'
import './styles/App.css'
import Personal from './components/Personal-Details/Personal'
import Resume from './components/Resume'

function App() {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', email: '', phoneNumber: '', address: '' })

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [key]: e.target.value
      }
    })
  }
  return (
    <div className='app'>
      <div className='edit-container'>
        <Personal
          onChange={handlePersonalInfoChange}
          email={personalInfo.email}
          fullName={personalInfo.fullName}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </div>
      <div className="resume-container">
        <Resume
          email={personalInfo.email}
          fullName={personalInfo.fullName}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </div>
    </div>
  )
}

export default App

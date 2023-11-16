import { useState } from 'react'
import './styles/App.css'
import Personal from './components/Personal-Details/Personal'
import Resume from './components/Resume'
import Education from './components/Education-Details/Education'
import uniqid from 'uniqid';


function App() {
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', email: '', phoneNumber: '', address: '' })
  const [educationInfo, setEducationInfo] = useState({ school: '', degree: '', startDate: '', endDate: '', location: '', id: uniqid() })
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [educationList, setEducationList] = ([])

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.dataset
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [key]: e.target.value
      }
    })
  }

  const handleEducationInfoChange = (e) => {
    const { key } = e.target.dataset
    setEducationInfo((prevInfo) => {
      return {
        ...prevInfo,
        [key]: e.target.value
      }
    })
  }

  const handleEducationDelete = (index) => {
    const updatedList = { ...educationList}
    updatedList.splice(index,1);
    setEducationList(updatedList)
  }

  const handleToggle = (e) => {
    const { key } = e.target.dataset
    if (key === 'education') {
      setIsEducationOpen(!isEducationOpen)
    }
  }

  const handleAddEducation = (e) => {
    const { key } = e.target.dateset
    setEducationList((prevList) => {
      return {
        ...prevList,
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
        <Education
          educationList={educationList}
          educationInfo={educationInfo}
          onClick={handleToggle}
          isOpen={isEducationOpen}
          onChange={handleEducationInfoChange}
          onDelete={handleEducationDelete} />
      </div>
      <div className="resume-container">
        <Resume
          personalInfo={personalInfo}
        />
      </div>
    </div>
  )
}

export default App

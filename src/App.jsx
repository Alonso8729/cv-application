import { useState } from 'react'
import './styles/App.css'
import Personal from './components/Personal-Details/Personal'
import Resume from './components/Resume'
import Education from './components/Education-Details/Education'
import ExampleData from './exampleData'
import uniqid from 'uniqid';


function App() {
  const [personalInfo, setPersonalInfo] = useState(ExampleData.personalInfo)
  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
    id: uniqid(),
  })
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [educationList, setEducationList] = useState(ExampleData.education);
  const [educationForm, setEducationForm] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  const handlePersonalInfoChange = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    setPersonalInfo((prevInfo) => {
      return {
        ...prevInfo,
        [key]: e.target.value
      }
    })
  }

  const handleEducationInfoChange = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    setEducationInfo((prevInfo) => {
      return {
        ...prevInfo,
        [key]: e.target.value
      }
    })
  }

  const handleEducationDelete = (index) => {
    const updatedList = [...educationList]
    updatedList.splice(index, 1);
    setEducationList(updatedList)
  }

  const handleToggle = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    if (key === 'education') {
      setIsEducationOpen(!isEducationOpen)
    }
  }

  const handleAddEducation = () => {
    if (isEditMode) {
      setEducationList(prevList =>
        prevList.map(item =>
          item.id === educationInfo.id ? educationInfo : item))
    }
    else {
      setEducationList((prevList) => [...prevList, educationInfo])
    }
    clearEducationInfo()
    setIsEditMode(false)
    setEducationForm(!educationForm);
  }

  const handleCancel = (section) => {
    if (section === 'education') {
      clearEducationInfo()
      setEducationForm(!educationForm)
    }
  }

  const handleEditEducation = (item) => {
    setEducationInfo(item)
    setEducationForm(!educationForm)
    setIsEditMode(true)
  }

  const clearEducationInfo = () => {
    setEducationInfo({
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    })
  }

  const createForm = (sectionName) => {

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
          onDelete={handleEducationDelete}
          onToggle={handleToggle}
          onSave={handleAddEducation}
          onCancel={() => handleCancel('education')}
          isForm={educationForm}
          onButton={() => setEducationForm(!educationForm)}
          onEdit={handleEditEducation}
        />

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

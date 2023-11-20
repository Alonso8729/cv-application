import { useState } from 'react'
import './styles/App.css'
import Personal from './components/Personal/Personal'
import Resume from './components/Resume'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import ExampleData from './exampleData'
import uniqid from 'uniqid';


function App() {
  const [personalInfo, setPersonalInfo] = useState(ExampleData.personalInfo)
  //Education states
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
  //Experience states
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    location: "",
    description: "",
    startDate: "",
    endDate: "",
    id: uniqid(),
  })
  const [experienceList, setExperienceList] = useState(ExampleData.experience)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)
  const [experienceForm, setExperienceForm] = useState(false)
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

  const handleSectionChange = (e, section) => {
    e.preventDefault()
    const { key } = e.target.dataset
    if (section === 'education') {
      setEducationInfo((prevInfo) => {
        return {
          ...prevInfo,
          [key]: e.target.value
        }
      })
    }
    else if (section === 'experience') {
      setExperienceInfo((prevInfo) => {
        return {
          ...prevInfo,
          [key]: e.target.value
        }
      })
    }
  }

  const handleDelete = (index, section) => {
    if (section === 'education') {
      const updatedList = [...educationList]
      updatedList.splice(index, 1);
      setEducationList(updatedList)
    }
    else if (section === 'experience') {
      const updatedList = [...experienceList]
      updatedList.splice(index, 1);
      setExperienceList(updatedList)
    }
  }

  const handleToggle = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    if (key === 'education') {
      setIsEducationOpen(!isEducationOpen)
    }
    else if (key === 'experience') {
      setIsExperienceOpen(!isExperienceOpen)
    }
  }

  const handleSectionAdd = (section) => {
    if (section === 'education') {
      if (isEditMode) {
        setEducationList(prevList =>
          prevList.map(item =>
            item.id === educationInfo.id ? educationInfo : item))
      }
      else {
        setEducationList((prevList) => [...prevList, educationInfo])
      }
      clearInfo('education')

      setEducationForm(!educationForm);
    }
    else if (section === 'experience') {
      if (isEditMode) {
        setExperienceList(prevList =>
          prevList.map(item =>
            item.id === experienceInfo.id ? experienceInfo : item))
      }
      else {
        setExperienceList((prevList) => [...prevList, ExperienceInfo])
      }
      clearInfo('experience')
    }
    setIsEditMode(false)
  }

  const handleCancel = (section) => {
    if (section === 'education') {
      clearInfo('education')
      setEducationForm(!educationForm)
    }
  }

  const handleEdit = (item, section) => {
    if (section === 'education') {
      setEducationInfo(item)
      setEducationForm(!educationForm)
    }
    else if (section === 'experience') {
      setExperienceInfo(item)
      setExperienceForm(!experienceForm)
    }
    setIsEditMode(true)
  }

  const clearInfo = (section) => {
    if (section === 'education') {
      setEducationInfo({
        degree: "",
        school: "",
        location: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      })
    }
    else if (section === 'experience') {
      setExperienceInfo({
        companyName: "",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      })
    }
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
          isOpen={isEducationOpen}
          onChange={handleSectionChange}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onSave={handleSectionAdd}
          onCancel={handleCancel}
          isForm={educationForm}
          onButton={() => setEducationForm(!educationForm)}
          onEdit={handleEdit}
        />
        <Experience
          experienceList={experienceList}
          experienceInfo={experienceInfo}
          isOpen={isExperienceOpen}
          onChange={handleSectionChange}
          onToggle={handleToggle}
          onSave={handleSectionAdd}
          onCancel={handleCancel}
          isForm={experienceForm}
          onButton={() => setExperienceForm(!experienceForm)}
          onEdit={handleEdit}
        />
      </div>
      <div className="resume-container">
        <Resume
          personalInfo={personalInfo}
          educationList={educationList}
        />
      </div>
    </div>
  )
}

export default App

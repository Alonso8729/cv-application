import { useState, useEffect } from 'react'
import './styles/App.css'
import Personal from './components/Personal/Personal'
import Resume from './components/Resume'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import ExampleData from './ExampleData'
import uniqid from 'uniqid';
import TemplateSection from './components/Template/TemplateSection'
import ViewMode from './components/ViewMode'

function App() {
  //Personal details state
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

  //Skills states
  const [skillsList, setSkillsList] = useState(ExampleData.skills)
  const [newSkill, setNewSkill] = useState({ title: '', id: uniqid() })
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)
  const [skillsForm, setSkillsForm] = useState(false)

  //General states
  const [isEditMode, setIsEditMode] = useState(false)
  const [isViewMode, setIsViewMode] = useState(window.innerWidth > 1150);

  useEffect(() => {
    const updateViewMode = () => {
      setIsViewMode(window.innerWidth > 1150);
    };

    window.addEventListener('resize', updateViewMode);
    updateViewMode();
    return () => {
      window.removeEventListener('resize', updateViewMode);
    };
  }, []);

  const handleSectionChange = (e, section) => {
    e.preventDefault();
    const { key } = e.target.dataset;

    if (section === 'education') {
      setEducationInfo((prevInfo) => ({ ...prevInfo, [key]: e.target.value }));
    } else if (section === 'experience') {
      setExperienceInfo((prevInfo) => ({ ...prevInfo, [key]: e.target.value }));
    } else if (section === 'personal') {
      setPersonalInfo((prevInfo) => ({ ...prevInfo, [key]: e.target.value }));
    } else if (section === 'skills') {
      setNewSkill((prevSkill) => ({ ...prevSkill, [key]: e.target.value }));
    }
  };


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
    else if (section === 'skills') {
      const updatedList = [...skillsList]
      updatedList.splice(index, 1)
      setSkillsList(updatedList)
    }
  }

  const handleToggle = (e) => {
    e.preventDefault()
    const { key } = e.target.dataset
    if (key === 'education') {
      setIsEducationOpen((prev) => !prev);
      setIsExperienceOpen(false);
      setIsSkillsOpen(false);
    } else if (key === 'experience') {
      setIsExperienceOpen((prev) => !prev);
      setIsEducationOpen(false);
      setIsSkillsOpen(false);
    } else if (key === 'skills') {
      setIsSkillsOpen((prev) => !prev);
      setIsEducationOpen(false);
      setIsExperienceOpen(false);
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
        setExperienceList((prevList) => [...prevList, experienceInfo])
      }
      clearInfo('experience')
      setExperienceForm(!experienceForm)
    }
    else if (section === 'skills') {
      if (isEditMode) {
        setSkillsList(prevSkills =>
          prevSkills.map(item =>
            item.id === newSkill.id ? newSkill : item)
        )
      }
      else {
        setSkillsList((prevSkills) => [...prevSkills, newSkill])
      }
      clearInfo('skills')
      setSkillsForm(!skillsForm)
    }
    setIsEditMode(false)
  }

  const handleCancel = (section) => {
    if (section === 'education') {
      clearInfo('education')
      setEducationForm(!educationForm)
    }
    else if (section === 'experience') {
      clearInfo('experience')
      setExperienceForm(!experienceForm)
    }
    else if (section === 'skills') {
      clearInfo('skills')
      setSkillsForm(!skillsForm)
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
    else if (section === 'skills') {
      setNewSkill(item)
      setSkillsForm(!skillsForm)
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
    else if (section === 'skills') {
      setNewSkill({
        title: '',
        id: uniqid()
      })
    }
    else if (section === 'personal') {
      setPersonalInfo({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: ""
      })
    }
  }

  const handleClearResume = () => {
    setPersonalInfo([])
    setEducationList([]);
    setExperienceList([])
    setSkillsList([])
    clearInfo('personal')
  }

  const handleLoadExample = () => {
    setPersonalInfo(ExampleData.personalInfo)
    setEducationList(ExampleData.education);
    setExperienceList(ExampleData.experience)
    setSkillsList(ExampleData.skills)
  }

  const handleViewMode = () => {
    setIsViewMode(!isViewMode)
  }

  return (
    <div className='app'>
      <div className='edit-container'>
        <TemplateSection
          onClear={handleClearResume}
          onLoad={handleLoadExample}
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
          skillsList={skillsList}
        />
        <Personal
          onChange={handleSectionChange}
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
          onDelete={handleDelete}
          onChange={handleSectionChange}
          onToggle={handleToggle}
          onSave={handleSectionAdd}
          onCancel={handleCancel}
          isForm={experienceForm}
          onButton={() => setExperienceForm(!experienceForm)}
          onEdit={handleEdit}
        />
        <Skills
          skillsList={skillsList}
          newSkill={newSkill}
          isOpen={isSkillsOpen}
          onDelete={handleDelete}
          onChange={handleSectionChange}
          onToggle={handleToggle}
          onSave={handleSectionAdd}
          onCancel={handleCancel}
          isForm={skillsForm}
          onButton={() => setSkillsForm(!skillsForm)}
          onEdit={handleEdit}
        />
      </div>
      <div style={{ zIndex: `${isViewMode ? 1 : -1}` }} className="resume-container">
        <Resume
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
          skillsList={skillsList}
          isViewMode={isViewMode}
        />
      </div>
      <ViewMode
        handleView={handleViewMode}
        isViewMode={isViewMode}
      />
    </div>
  )
}

export default App

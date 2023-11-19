import '../../styles/Education.css'
import EducationForm from './EducationForm'

export default function Education({ educationInfo,isOpen, onToggle, educationList, handleDelete, onSave, isForm, onButton, onCancel,onChange }) {
    return (
        <div className="education-details">
            <div className="education-header">
                <div className='left-header'>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h2 className="education-title">Education Details</h2>
                </div>
                <div className='right-header'>
                    <i data-key="education" className={`fa-solid fa-chevron-down ${isOpen ? 'open' : ''}`} onClick={onToggle}></i>
                </div>
            </div>
            {/** Display education content if open*/}
            {isOpen &&
                <>
                    <div className={`education-content ${isForm ? 'hide' : ''}`}>
                        {educationList.length > 0 ?
                            <div className='education-list'>
                                <ul>
                                    {educationList.map((item) =>
                                        <div className='education-item'>
                                            <li onClick={onToggle} key={item.key}>
                                                {item.school}
                                            </li>
                                            <i onClick={() => handleDelete(index)} className="fa-solid fa-trash-can"></i>
                                        </div>
                                    )
                                    }
                                </ul>
                            </div>
                            :
                            ''
                        }
                    </div>
                    <EducationForm educationInfo={educationInfo} onCancel={onCancel} onSave={onSave} isForm={isForm} onChange={onChange} />
                    <div className={`add-button-ctn ${isForm ? 'hide' : ''}`}>
                        <button onClick={onButton} className='add-ed-button'><i className="fa-solid fa-plus"></i>Education</button>
                    </div>
                </>
            }
        </div >
    )
}
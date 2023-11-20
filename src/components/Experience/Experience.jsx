import ExperienceForm from './ExperienceForm'
import '../../styles/Experience.css'

export default function Experience({
    experienceList,
    experienceInfo,
    isOpen,
    onDelete,
    onChange,
    onToggle,
    onSave,
    onCancel,
    isForm,
    onButton,
    onEdit
}) {
    return (
        <div className="experience-ctn">
            <div className="experience-header">
                <div className='exp-left-header'>
                    <i className="fa-solid fa-briefcase"></i>
                    <h2 className="experience-title">Experience Details</h2>
                </div>
                <div className='right-header'>
                    <i data-key="experience" className={`fa-solid fa-chevron-down ${isOpen ? 'open' : ''}`} onClick={onToggle}></i>
                </div>
            </div>
            {/** Display education content if open*/}
            {isOpen &&
                <>
                    <div className={`experience-content ${isForm ? 'hide' : ''}`}>
                        {experienceList.length > 0 ?
                            <div className='experience-list'>
                                <ul>
                                    {experienceList.map((item, index) =>
                                        <div className='experience-item'>
                                            <li key={item.key}>
                                                {item.companyName}
                                            </li>
                                            <div className="item-buttons">
                                                <i onClick={() => onEdit(item, 'experience')} className="edit-icon fa-regular fa-pen-to-square"></i>
                                                <i onClick={() => onDelete(index, 'experience')} className="delete-icon fa-solid fa-trash-can"></i>
                                            </div>
                                        </div>
                                    )
                                    }
                                </ul>
                            </div>
                            :
                            ''
                        }
                    </div>
                    <ExperienceForm experienceInfo={experienceInfo} onCancel={onCancel} onSave={onSave} isForm={isForm} onChange={onChange} />
                    <div className={`add-button-ctn ${isForm ? 'hide' : ''}`}>
                        <button onClick={onButton} className='add-ed-button'><i className="fa-solid fa-plus"></i>Education</button>
                    </div>
                </>
            }




        </div>
    )

}
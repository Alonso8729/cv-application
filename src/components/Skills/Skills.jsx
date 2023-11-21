import '../../styles/Skills.css'
import SkillsForm from './SkillsForm'

export default function Skills({
    skillsList,
    newSkill,
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
        <div className="skills-section">
            <div className="skills-header">
                <div className="skills-left-header">
                    <i className="fa-solid fa-pen-ruler"></i>
                    <h2 className="skills-title">Skills Details</h2>
                </div>
                <div className='right-header'>
                    <i data-key="skills" className={`fa-solid fa-chevron-down ${isOpen ? 'open' : ''}`} onClick={onToggle}></i>
                </div>
            </div>
            {/** Display skills content if open*/}
            {isOpen &&
                <>
                    <div className={`skills-content ${isForm ? 'hide' : ''}`}>
                        {skillsList.length > 0 ?
                            <div className='skills-list'>
                                <ul>
                                    {skillsList.map((item, index) =>
                                        <div className='skill-item'>
                                            <li key={item.key}>
                                                {item.title}
                                            </li>
                                            <div className="item-buttons">
                                                <i onClick={() => onEdit(item, 'skills')} className="edit-icon fa-regular fa-pen-to-square"></i>
                                                <i onClick={() => onDelete(index, 'skills')} className="delete-icon fa-solid fa-trash-can"></i>
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
                    <SkillsForm newSkill={newSkill} onCancel={onCancel} onSave={onSave} isForm={isForm} onChange={onChange} />
                    <div className={`add-button-ctn ${isForm ? 'hide' : ''}`}>
                        <button onClick={onButton} className='add-ed-button'><i className="fa-solid fa-plus"></i>Skill</button>
                    </div>
                </>
            }
        </div>
    )
}
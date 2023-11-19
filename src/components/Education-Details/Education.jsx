import '../../styles/Education.css'

export default function Education({ isOpen, onToggle, educationList, handleDelete }) {
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
                    <div className="education-content">
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
                            <p>156651561651</p>
                        }
                    </div>
                    <div className="add-button-ctn">
                        <button className='add-ed-button'><i class="fa-solid fa-plus"></i>Education</button>
                    </div>
                </>
            }
        </div >
    )
}
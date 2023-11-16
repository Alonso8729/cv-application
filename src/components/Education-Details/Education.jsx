import '../../styles/Education.css'

export default function Education({ isOpen, onToggle, educationInfo, educationList,handleDelete }) {
    return (
        <div className="education-details">
            <div className="education-header">
                <div className='left-header'>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <h2 className="education-title">Education Details</h2>
                </div>
                <div className='right-header'>
                    <i data-key="education" className={`fa-solid fa-chevron-down ${isOpen ? 'open' : ''}`} onClick={onClick}></i>
                </div>
            </div>
            {/** Display education content if open*/}
            {isOpen &
                <div className='education-content'>
                    {educationList.length > 0 ?
                        <div className="education-list">
                            <ul>
                                {educationList.map((item, index) =>
                                    <div className='education-item'>
                                        <li onClick={onToggle} key={index}>{item.school}
                                        </li>
                                        <i onClick={()=>handleDelete(index)} className="fa-solid fa-trash-can"></i>
                                    </div>
                                )
                                }
                            </ul>
                        </div>

                        :
                        ''
                    }

                </div>

            }
        </div >
    )
}
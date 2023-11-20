import '../../styles/ExperiencePreview.css'

export default function ExperiencePreview({experienceList}){
    return (
        experienceList.length > 0 &&
        <div className='experience-container'>
            <div className="experience-head">
                <h2>Experience</h2>
            </div>
            <ul className='experience-items'>
                {experienceList.map(item =>
                    <li key={item.id} className='exp-item'>
                        <div className="left-info">
                            <div className="ed-dates">
                                <p>{item.startDate}</p>{item.startDate ? '-' : ''}<p>{item.endDate}</p>
                            </div>
                            <div className="ed-location">
                                {item.location}
                            </div>
                        </div>
                        <div className="right-info">
                            <p className='item-company'>{item.companyName}</p>
                            <p>{item.positionTitle}</p>
                            <p className="item-desc">{item.description}</p>
                        </div>
                    </li>)}

            </ul>
        </div>
    )

}
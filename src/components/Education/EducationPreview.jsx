import '../../styles/EducationPreview.css'

export default function EducationPreview({ educationList }) {
    return (
        educationList.length > 0 &&
        <div className='education-ctn'>
            <div className="education-head">
                <h2>Education</h2>
            </div>
            <ul className='education-items'>
                {educationList.map(item =>
                    <li key={item.id} className='ed-item'>
                        <div className="left-info">
                            <div className="ed-dates">
                                <p>{item.startDate}</p>{item.startDate ? '-' : ''}<p>{item.endDate}</p>
                            </div>
                            <div className="ed-location">
                                {item.location}
                            </div>
                        </div>
                        <div className="right-info">
                            <p className='school-item'>{item.school}</p>
                            <p>{item.degree}</p>
                        </div>
                    </li>)}

            </ul>
        </div>
    )
}
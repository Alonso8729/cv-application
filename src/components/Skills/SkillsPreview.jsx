import '../../styles/SkillsPreview.css'

export default function SkillsPreview({ skillsList }) {
    return (
        skillsList.length > 0 &&
        <div className='skills-container'>
            <div className="skills-head">
                <h2>Skills</h2>
            </div>
            <ul className='skills-items'>
                {skillsList.map(item =>
                    <li key={item.id} className='skill-element'>
                        <p>{item.title}</p>
                    </li>)}

            </ul>
        </div>
    )
}
import '../../styles/TemplateSection.css'
import ResumePDF from '../ResumePDF.jsx'

export default function TemplateSection({
    onClear,
    onLoad,
    personalInfo,
    educationList,
    experienceList,
    skillsList,
}) {
    return (
        <div className='template-ctn'>
            <div className="template-btns">
                <button onClick={onClear} className='clear-btn' type='button'>
                    <i className="fa-solid fa-trash"></i>Clear Resume
                </button>
                <button onClick={onLoad} className='example-btn' type="button">
                    Load Example
                </button>
                <div style={{ display: 'none' }}>
                    <ResumePDF
                        personalInfo={personalInfo}
                        educationList={educationList}
                        experienceList={experienceList}
                        skillsList={skillsList}
                    />
                </div>
            </div>
        </div>
    );
}
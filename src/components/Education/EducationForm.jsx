import InputDiv from "../InputDiv"
import '../../styles/EducationForm.css'
import Buttons from "../Buttons"

export default function EducationForm({ onSave, educationInfo, onCancel, isForm, onChange }) {
    return (
        <form className={`education-form ${isForm ? '' : 'hide'}`}>
            <InputDiv
                id='school'
                placeholder='Enter school or university'
                value={educationInfo.school}
                onChange={(e) => onChange(e, 'education')}
                label='School'
                data-key='school'
            />
            <InputDiv
                id='degree'
                placeholder='Enter field of study'
                value={educationInfo.degree}
                onChange={(e) => onChange(e, 'education')}
                label='Degree'
                data-key='degree'
            />
            <div className="dates">
                <InputDiv
                    id='start-date'
                    placeholder='Enter start date'
                    value={educationInfo.startDate}
                    onChange={(e) => onChange(e, 'education')}
                    label='Start Date'
                    data-key='startDate'
                />
                <InputDiv
                    id='end-date'
                    placeholder='Enter end date'
                    value={educationInfo.endDate}
                    onChange={(e) => onChange(e, 'education')}
                    label='End Date'
                    data-key='endDate'
                />
            </div>
            <InputDiv
                id='location'
                placeholder='Enter location'
                value={educationInfo.location}
                onChange={(e) => onChange(e, 'education')}
                label='Location'
                data-key='location'
                optional='optional'
            />
            <Buttons section='education' onSave={onSave} onCancel={onCancel} />

        </form>
    )



}
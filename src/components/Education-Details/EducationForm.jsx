import InputDiv from "../InputDiv"
import Education from "./Education"
import '../../styles/EducationForm.css'
import Buttons from "../Buttons"

export default function EducationForm({ onSave, educationInfo, onCancel, isForm, onChange }) {
    return (
        <form className={`education-form ${isForm ? '' : 'hide'}`}>
            <InputDiv
                id='school'
                placeholder='Enter school or university'
                value={educationInfo.school}
                onChange={onChange}
                label='School'
                data-key='school'
            />
            <InputDiv
                id='degree'
                placeholder='Enter field of study'
                value={educationInfo.degree}
                onChange={onChange}
                label='Degree'
                data-key='degree'
            />
            <div className="dates">
                <InputDiv
                    id='start-date'
                    placeholder='Enter start date'
                    value={educationInfo.startDate}
                    onChange={onChange}
                    label='Start Date'
                    data-key='startDate'
                />
                <InputDiv
                    id='end-date'
                    placeholder='Enter end date'
                    value={educationInfo.endDate}
                    onChange={onChange}
                    label='End Date'
                    data-key='endDate'
                />
            </div>
            <InputDiv
                id='location'
                placeholder='Enter location'
                value={educationInfo.location}
                onChange={onChange}
                label='Location'
                data-key='location'
                optional='optional'
            />
            <Buttons onSave={onSave} onCancel={onCancel} />

        </form>
    )



}
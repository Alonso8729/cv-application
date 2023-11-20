import Buttons from "../Buttons";
import InputDiv from "../InputDiv";
import '../../styles/ExperienceForm.css'

export default function ExperienceForm({
    onSave,
    experienceInfo,
    onCancel,
    isForm,
    onChange
}) {
    return (
        <form className={`experience-form ${isForm ? '' : 'hide'}`}>
            <InputDiv
                id='company'
                placeholder='Enter company name'
                value={experienceInfo.companyName}
                onChange={(e) => onChange(e, 'experience')}
                label='Company Name'
                data-key='companyName'
            />
            <InputDiv
                id='degree'
                placeholder='Enter position title'
                value={experienceInfo.positionTitle}
                onChange={(e) => onChange(e, 'experience')}
                label='Position Title'
                data-key='positionTitle'
            />
            <div className="dates">
                <InputDiv
                    id='exp-start-date'
                    placeholder='Enter start date'
                    value={experienceInfo.startDate}
                    onChange={(e) => onChange(e, 'experience')}
                    label='Start Date'
                    data-key='startDate'
                />
                <InputDiv
                    id='exp-end-date'
                    placeholder='Enter end date'
                    value={experienceInfo.endDate}
                    onChange={(e) => onChange(e, 'experience')}
                    label='End Date'
                    data-key='endDate'
                />
            </div>
            <InputDiv
                id='location'
                placeholder='Enter location'
                value={experienceInfo.location}
                onChange={(e) => onChange(e, 'experience')}
                label='Location'
                data-key='location'
                optional='optional'
            />
            <InputDiv
                id='description'
                type='textarea'
                placeholder='Enter description'
                value={experienceInfo.description}
                onChange={(e) => onChange(e, 'experience')}
                label='Description'
                data-key='description'
                optional='optional'
            />
            <Buttons section='experience' onSave={onSave} onCancel={onCancel} />

        </form>
    )

}
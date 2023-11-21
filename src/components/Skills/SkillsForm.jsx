import Buttons from "../Buttons";
import InputDiv from "../InputDiv";
import '../../styles/SkillsForm.css'

export default function SkillsForm({
    onSave,
    newSkill,
    onCancel,
    isForm,
    onChange
}) {
    return (
        <form className={`skills-form ${isForm ? '' : 'hide'}`}>
            <InputDiv
                id='skill'
                placeholder='Enter skill'
                value={newSkill.title}
                onChange={(e) => onChange(e, 'skills')}
                label='Skill'
                data-key='title'
            />
            <Buttons section='skills' onSave={onSave} onCancel={onCancel} />
        </form>
    )
}
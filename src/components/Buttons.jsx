import '../styles/Buttons.css'

export default function Buttons({ section, onSave, onCancel }) {
    return (
        <div className="buttons">
            <button type='button'
                onClick={section === 'education' ? () => onCancel('education') : () => onCancel('experience')}
                className="cancel-btn">Cancel</button>
            <button type='button' onClick={section === 'education' ? () => onSave('education') : () => onSave('experience')}
                className="save-btn">Save</button>
        </div>
    )
}
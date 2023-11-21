import '../styles/Buttons.css'

export default function Buttons({ section, onSave, onCancel }) {
    return (
        <div className="buttons">
            <button type='button'
                onClick={() => onCancel(`${section}`)}
                className="cancel-btn">Cancel</button>
            <button type='button' onClick={() => onSave(`${section}`)}
                className="save-btn">Save</button>
        </div>
    )
}
import '../styles/Buttons.css'

export default function Buttons({ onSave, onCancel }) {
    return (
        <div className="buttons">
            <button type='button' onClick={onCancel} className="cancel-btn">Cancel</button>
            <button type='button' onClick={onSave} className="save-btn">Save</button>
        </div>
    )
}
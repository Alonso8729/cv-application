import React from "react"
import '../styles/InputDiv.css'

export default function InputDiv({
    id, placeholder, type, value, onChange, optional, label, "data-key": dataKey
}) {
    return (
        <div className="input-div">
            <label htmlFor={id}>
                <span className="input-label">{label}</span>
                {optional && <span className="input-optional">Optional</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    data-key={dataKey}
                    rows='5'
                    columns='5'
                >
                </textarea>
            ) :
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={id}
                    data-key={dataKey}
                />
            }
        </div>
    )
}
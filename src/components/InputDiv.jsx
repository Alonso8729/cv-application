import React from "react"
import '../styles/InputDiv.css'

export default function InputDiv({
    id, placeholder, type, value, onChange, optional, label, name, "data-key": dataKey
}) {
    return (
        <div className="input-div">
            <label htmlFor={id}>
                <span className="input-label">{label}</span>
                {optional && <span className="input-optional">Optional</span>}
            </label>
            {type === 'textarea' ? (
                <textarea>
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    data-key={dataKey}
                </textarea>
            ) :
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    data-key={dataKey}
                />
            }
        </div>
    )
}
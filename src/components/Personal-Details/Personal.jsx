import React, { useState } from "react"
import InputDiv from "../InputDiv"

export default function Personal() {
    const [personalInfo, setPersonalInfo] = useState({ fullName: '', email: '', phoneNumber: '', address: '' })

    const handleChange = (e) => {
        const {value,name} = e.target
        setPersonalInfo((prevInfo)=>{
            return {
                ...prevInfo,
                [name] : value
            }
        } )
    }

    return (
        <form>
            <h2>Personal Details</h2>
            <InputDiv
                onChange={handleChange}
                type="text"
                id="full-name"
                placeholder="Enter first and last name"
                value={personalInfo.fullName}
                label="Full Name"
                name="fullName"
                data-key="fullName"
            />
            <InputDiv
                onChange={handleChange}
                type="email"
                id="email"
                placeholder="Enter email"
                value={personalInfo.email}
                label="Email"
                name="email"
                data-key="email"
            />
            <InputDiv
                onChange={handleChange}
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
                value={personalInfo.phoneNumber}
                label="Phone number"
                name="phoneNumber"
                data-key="phoneNumber"
            />
            <InputDiv
                onChange={handleChange}
                type="text"
                id="address"
                placeholder="Enter City, Country"
                value={personalInfo.address}
                label="Address"
                name="address"
                data-key="address"
            />
        </form>
    )


}
import React, { useState } from "react"
import InputDiv from "../InputDiv"
import '../../styles/Personal.css'

export default function Personal({ email, fullName, phoneNumber, address, onChange }) {

    return (
        <form className="personal-details">
            <h2>Personal Details</h2>
            <InputDiv
                onChange={(e)=>onChange(e,'personal')}
                type="text"
                id="full-name"
                placeholder="Enter first and last name"
                value={fullName}
                label="Full Name"
                data-key="fullName"
            />
            <InputDiv
                onChange={(e)=>onChange(e,'personal')}
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                label="Email"
                data-key="email"
            />
            <InputDiv
                onChange={(e)=>onChange(e,'personal')}
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
                value={phoneNumber}
                label="Phone number"
                data-key="phoneNumber"
            />
            <InputDiv
                onChange={(e)=>onChange(e,'personal')}
                type="text"
                id="address"
                placeholder="Enter City, Country"
                value={address}
                label="Address"
                data-key="address"
            />
        </form>
    )


}
import React, { useState } from "react"
import InputDiv from "../InputDiv"

export default function Personal({email,fullName,phoneNumber,address,onChange}) {
    
    return (
        <form>
            <h2>Personal Details</h2>
            <InputDiv
                onChange={onChange}
                type="text"
                id="full-name"
                placeholder="Enter first and last name"
                value={fullName}
                label="Full Name"
                data-key="fullName"
            />
            <InputDiv
                onChange={onChange}
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                label="Email"
                data-key="email"
            />
            <InputDiv
                onChange={onChange}
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
                value={phoneNumber}
                label="Phone number"
                data-key="phoneNumber"
            />
            <InputDiv
                onChange={onChange}
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
import React from "react";
import { PersonalPreview } from "./Personal-Details/PersonalPreview";
import '../styles/Resume.css'

export default function Resume({personalInfo}) {
    const {email,fullName,phoneNumber,address} = personalInfo
    return (
        <div className="resume-container">
            <div className="resume">
                <PersonalPreview
                    email={email}
                    fullName={fullName}
                    phoneNumber={phoneNumber}
                    address={address}
                />
            </div>
        </div>
    )
}
import React from "react";
import { PersonalPreview } from "./Personal/PersonalPreview";
import '../styles/Resume.css'
import EducationPreview from "./Education/EducationPreview";

export default function Resume({ personalInfo, educationList }) {
    const { email, fullName, phoneNumber, address } = personalInfo
    return (
        <div className="resume-container">
            <div className="resume">
                <PersonalPreview
                    email={email}
                    fullName={fullName}
                    phoneNumber={phoneNumber}
                    address={address}
                />
                <EducationPreview
                    educationList={educationList}
                />
            </div>
        </div>
    )
}
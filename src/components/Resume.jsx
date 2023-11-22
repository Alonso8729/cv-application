import React from "react";
import { PersonalPreview } from "./Personal/PersonalPreview";
import '../styles/Resume.css'
import EducationPreview from "./Education/EducationPreview";
import ExperiencePreview from "./Experience/ExperiencePreview"
import SkillsPreview from "./Skills/SkillsPreview";

export default function Resume({ personalInfo, educationList, experienceList, skillsList, isViewMode }) {
    const { email, fullName, phoneNumber, address } = personalInfo
    return (
        <div className="resume-ctn">
            <div className={`resume ${isViewMode ? '' : 'hide'}`}>
                <PersonalPreview
                    email={email}
                    fullName={fullName}
                    phoneNumber={phoneNumber}
                    address={address}
                />
                <EducationPreview
                    educationList={educationList}
                />
                <ExperiencePreview
                    experienceList={experienceList}
                />
                <SkillsPreview
                    skillsList={skillsList}
                />
            </div>
        </div>
    )
}
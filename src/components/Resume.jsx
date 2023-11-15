import React from "react";
import { PersonalPreview } from "./Personal-Details/PersonalPreview";

export default function Resume({email,fullName,phoneNumber,address}) {
    return (
        <div className="resume-container">
            <div className="resume-layout">
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
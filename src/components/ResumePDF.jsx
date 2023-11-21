import React from 'react';
import Resume from './Resume';



export default function ResumePDF({ personalInfo,
    educationList,
    experienceList,
    skillsList,
}) {
    return (
        <div>
            <Resume
                personalInfo={personalInfo}
                educationList={educationList}
                experienceList={experienceList}
                skillsList={skillsList}
            />
        </div>
    );
}


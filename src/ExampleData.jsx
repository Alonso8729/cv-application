import uniqid from 'uniqid';

const ExampleData = {
    personalInfo: {
        fullName: "Harry James Potter",
        email: "harry.potter@mail.co.uk",
        phoneNumber: "+44 3245 5521 5521",
        address: "Godric's Hollow, England",
    },
    education: [
        {
            degree: "Bachelors in Witchcraft",
            school: "Hogwarts School of Witchcraft",
            location: "Edinburgh, Scotland",
            startDate: "08/1980",
            endDate: "08/1984",
            id: uniqid()
        },
        {
            degree: "Masters in Wizardry",
            school: "Hogwarts School of Wizardry",
            location: "Edinburgh, Scotland",
            startDate: "01/1985",
            endDate: "present",
            id: uniqid()
        }
    ],
    experience: [
        {
            companyName: "Gryffindor Inc.",
            positionTitle: "Senior Quidditch Seeker",
            location: "Edinburgh, Scotland",
            description:
                "Caught the Golden Snitch in record time during the Triwizard Tournament, a testament to unparalleled speed and precision in Seeker abilities.",
            startDate: "08/1981",
            endDate: "present",
            id: uniqid(),
        }
    ],
    skills: [
        {
            title: 'Seeker Expertise',
            id: uniqid()
        },
        {
            title: 'Team Leadership',
            id: uniqid()
        },
        {
            title: 'Broomstick Mastery',
            id: uniqid()
        }
    ]
}

export default ExampleData
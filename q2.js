// For the above JSON, iterate over all for loops(for, for in, for of, forEach)

const resumeData = {
  "basics": {
    "name": "Ashwin Shivaa D",
    "Course": "MERN FSD",
    "contact": "938415193",
    "email": "ashwinshivaae@example.com",
    "linkedin": "AshwinShivaaD",
    "github": "https://github.com/AshwinShivaa"
  },
  "education": [
    {
      "degree": "B.E",
      "College": "Sri Ramakrishna Engineering College",
      "year": "2022"
    }
  ],
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL"
  ],
  "experience": [
    {
      "position": "PA",
      "company": "CTS",
      "location": "COIMBATORE",
      "start_date": "2022",
      "end_date": "Present"
    }
  ]
};

// Using a traditional for loop for objects
console.log("...for...");
for (let key in resumeData.basics) {
  if (resumeData.basics.hasOwnProperty(key)) {
    console.log(key, resumeData.basics[key]);
  }
}

// Using for...of loop for arrays
console.log("...for-of...");
for (const educationItem of resumeData.education) {
  console.log("Education:", educationItem);
}

for (const skill of resumeData.skills) {
  console.log("Skill:", skill);
}

for (const experienceItem of resumeData.experience) {
  console.log("Experience:", experienceItem);
}

// Using forEach for arrays
console.log("...for-each...");

resumeData.education.forEach((educationItem) => {
  console.log("Education:", educationItem);
});

resumeData.skills.forEach((skill) => {
  console.log("Skill:", skill);
});

resumeData.experience.forEach((experienceItem) => {
  console.log("Experience:", experienceItem);
});

export { resumeContent };

let resumeContent = {
  general: {
    fullName: 'John Doe',
    city: 'Munich, Germany',
    email: 'john.doe@gmail.com',
    phoneNo: '+49 175 ----1840',
  },
  education: [
    {
      key: crypto.randomUUID(),
      institutionName: 'TUM (Technische Universität München)',
      degree: 'Computer Science',
      place: 'Munich, Germany',
      graduationDate: 'June 2024',
    },
  ],
  professionalExperience: [
    {
      key: crypto.randomUUID(),
      institutionName: 'Amazon',
      role: 'Senior Developer',
      place: 'London, UK',
      dates: 'June 2024 - Current',
      description: 'Created Amazon Alexa and drone delivery',
    },
    {
      key: crypto.randomUUID(),
      institutionName: 'Amazon',
      role: 'Senior Developer',
      place: 'London, UK',
      dates: 'June 2024 - Current',
      description: 'Created Amazon Alexa and drone delivery',
    },
  ],
};

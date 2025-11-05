interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities?: string[];
  description?: string;
}

interface Language {
  id: string;
  name: string;
  proficiency: string;
}

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate: Date;
  link: string;
}

interface Skill {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface CV {
  id?: string;
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  language: Language[];
  project: Project[];
  skills: Skill[];
  summary?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type { CV };

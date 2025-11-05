import type { CV } from "@cv-maker-app/utils";
import { create } from "zustand";

type CVDataProps = {
  userInfos: CV;
  setUserInfos: (userInfo: CV) => void;
};

const sampleData: CV = {
  id: new Date().toDateString(),
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString(),
  personalInfo: {
    title: "Software Engineer",
    aboutMe: "Software Engineer",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@email.com",
    phone: "+33 1 23 45 67 89",
    address: "123 Rue de la République",
    city: "Paris",
    country: "France",
    postalCode: "75001",
  },
  education: [
    {
      id: "1",
      degree: "Master en Informatique",
      institution: "Université Paris-Saclay",
      startDate: "2018",
      endDate: "2020",
      description: "Spécialisation en intelligence artificielle",
      fieldOfStudy: "AI",
    },
    {
      id: "2",
      degree: "Licence en Mathématiques",
      institution: "Université Paris Diderot",
      startDate: "2015",
      endDate: "2018",
      description: "Mention Très Bien",
      fieldOfStudy: "Science mathematique",
    },
  ],
  experience: [
    {
      id: "1",
      position: "Développeur Full Stack",
      company: "Tech Solutions SAS",
      startDate: "2020",
      endDate: "2023",
      description:
        "Développement d'applications web modernes avec React, Node.js et bases de données cloud.",
    },
    {
      id: "2",
      position: "Stagiaire Développeur",
      company: "StartUp Innovante",
      startDate: "2019",
      endDate: "2020",
      description:
        "Participation au développement d'une plateforme e-commerce et optimisation des performances.",
    },
  ],
  language: [
    { id: "1", name: "Français", proficiency: "Courant" },
    { id: "2", name: "Anglais", proficiency: "Intermediaire" },
  ],
  project: [
    {
      id: "1",
      title: "Plateforme e-commerce",
      company: "Freelance",
      description: "Application e-commerce full-stack avec paiement en ligne",
      startDate: new Date(),
      endDate: new Date(),
      link: "http://github.com/johndoe/ecommerce_app.git",
    },
  ],
  skills: [
    { id: "1", name: "React/TypeScript", level: "Expert" },
    { id: "2", name: "Node.js", level: "Advanced" },
    { id: "3", name: "Tailwind CSS", level: "Advanced" },
    { id: "4", name: "Python", level: "Intermediate" },
    { id: "5", name: "Base de données", level: "Advanced" },
  ],
  summary:
    "Développeur passionné avec 3 ans d'expérience dans la création d'applications web modernes. Forte expertise en React, TypeScript et architectures cloud. À la recherche de nouveaux défis techniques pour contribuer à des projets innovants.",
};

export const useCVDataStore = create<CVDataProps>((set) => ({
  userInfos: sampleData,
  setUserInfos: (userInfo) => set({ userInfos: userInfo }),
}));

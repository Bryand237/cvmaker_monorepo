import type { CV } from "@cv-maker-app/utils";
import type { FC } from "react";

const StyleFrancais: FC<CV> = (userExemple: CV) => {
  return (
    <div
      className={`bg-white w-full h-full text-gray-800 p-8 max-w-4xl mx-auto border-2 border-blue-300 shadow-lg`}
    >
      {/* En-tête */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          {userExemple.personalInfo.firstName}{" "}
          {userExemple.personalInfo.lastName}
        </h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Téléphone:</span>{" "}
            {userExemple.personalInfo.phone}
          </div>
          <div>
            <span className="font-medium">Email:</span>{" "}
            {userExemple.personalInfo.email}
          </div>
          <div>
            <span className="font-medium">Adresse:</span>{" "}
            {userExemple.personalInfo.address},{" "}
            {userExemple.personalInfo.postalCode}{" "}
            {userExemple.personalInfo.city}
          </div>
        </div>
      </div>

      {/* Profil */}
      <section className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">
          Profil Professionnel
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {userExemple?.summary}
        </p>
      </section>

      <div className="grid grid-cols-2 gap-8">
        {/* Colonne gauche */}
        <div>
          {/* Expérience */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Expérience Professionnelle
            </h2>
            {userExemple.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-blue-700 mb-1 italic">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Formation */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Formation
            </h2>
            {userExemple.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-blue-700 italic">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </section>
          {/* Projets */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Projets Réalisés
            </h2>
            {userExemple.project.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate.getFullYear()} - {exp.endDate.getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-blue-700 mb-1 italic">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-700">{exp.description}</p>
                <p className="text-xs text-blue-700 underline">{exp.link}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Colonne droite */}
        <div>
          {/* Compétences */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Compétences
            </h2>
            <div className="space-y-3">
              {userExemple.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Langues */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Langues
            </h2>
            {userExemple.language.map((lang) => (
              <div key={lang.id} className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-gray-600">{lang.proficiency}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Centres d'intérêt */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Centres d'Intérêt
            </h2>
            <p className="text-sm text-gray-700">
              Lecture, voyages, technologies émergentes, bénévolat
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleFrancais;

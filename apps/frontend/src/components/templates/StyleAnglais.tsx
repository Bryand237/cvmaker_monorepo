import type { CV } from "@cv-maker-app/utils";
import type { FC } from "react";

const StyleAnglais: FC<CV> = (userExemple: CV) => {
  return (
    <div className="bg-white h-full text-gray-800 p-8 max-w-4xl mx-auto border-l-4 shadow-lg border-red-600">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {userExemple.personalInfo.firstName}{" "}
          {userExemple.personalInfo.lastName}
        </h1>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Email:</span>{" "}
            {userExemple.personalInfo.email}
          </div>
          <div>
            <span className="font-medium">Phone:</span>{" "}
            {userExemple.personalInfo.phone}
          </div>
          <div>
            <span className="font-medium">Address:</span>{" "}
            {userExemple.personalInfo.address}
          </div>
          <div>
            <span className="font-medium">Location:</span>{" "}
            {userExemple.personalInfo.city}, {userExemple.personalInfo.country}
          </div>
        </div>
      </div>

      {/* Profil */}
      <section className="mb-6 bg-gray-50 p-4 rounded">
        <h2 className="text-lg font-semibold text-red-700 mb-2">
          Personal Profile
        </h2>
        <p className="text-sm text-gray-700">{userExemple?.summary}</p>
      </section>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {/* Carrière */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              Career History
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
                <p className="text-sm text-red-700 mb-2 italic">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Formation */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              Education and Qualifications
            </h2>
            {userExemple.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-red-700 italic">{edu.institution}</p>
                {edu.description && (
                  <p className="text-sm text-gray-700 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              Projects
            </h2>
            {userExemple.project.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate.getFullYear()} - {exp.endDate.getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-red-700 mb-2 italic">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-700">{exp.description}</p>
                <p className="text-xs text-blue-700 underline">{exp.link}</p>
              </div>
            ))}
          </section>
        </div>

        <div>
          {/* Compétences */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              Core Skills
            </h2>
            <div className="space-y-3">
              {userExemple.skills.map((skill, index) => (
                <div key={index} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              Languages
            </h2>
            <div className="space-y-3">
              {userExemple.language.map((skill, index) => (
                <div key={index} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Références */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-red-700 border-b border-red-700 pb-1 mb-3">
              References
            </h2>
            <p className="text-sm text-gray-700 italic">
              Available upon request
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleAnglais;

import type { CV } from "@cv-maker-app/utils";
import type { FC } from "react";

const StyleAmericain2: FC<CV> = (userExemple: CV) => {
  return (
    <div className="bg-white h-full text-gray-800 p-8 max-w-4xl mx-auto border-gray-300 shadow-lg">
      {/* Simple Header */}
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold">
          {userExemple.personalInfo.firstName}{" "}
          {userExemple.personalInfo.lastName}
        </h1>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <span>{userExemple.personalInfo.email}</span>
          <span>|</span>
          <span>{userExemple.personalInfo.phone}</span>
          <span>|</span>
          <span>
            {userExemple.personalInfo.address}, {userExemple.personalInfo.city},{" "}
            {userExemple.personalInfo.country}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="col-span-3">
          {/* Experiences */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Experience
            </h2>
            {userExemple.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-md font-semibold">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{exp.company}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Formation */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Studies
            </h2>
            {userExemple.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600 italic">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{edu.institution}</p>
              </div>
            ))}
          </section>
          {/* Projets */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Projects
            </h2>
            {userExemple.project.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-md font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate.getFullYear()} -{" "}
                    {exp.endDate.getFullYear() || "Present"}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{exp.company}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
                <p className="text-blue-700 mt-2 underline text-xs">
                  {exp.link}
                </p>
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Summary
            </h2>
            <p className="text-gray-700">{userExemple?.summary}</p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Skills
            </h2>
            <div className="space-y-2">
              {userExemple.skills.map((skill, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 ml-1">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
          {/* Language */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
              Languages
            </h2>
            <div className="space-y-2">
              {userExemple.language.map((skill, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 ml-1">
                    {skill.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleAmericain2;

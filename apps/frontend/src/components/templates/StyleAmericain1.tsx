import type { CV } from "@cv-maker-app/utils";
import { Dot } from "lucide-react";
import { type FC } from "react";

const StyleAmericain1: FC<CV> = (userExemple) => {
  return (
    <div className="bg-white h-full text-gray-800 p-8 max-w-4xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          {userExemple.personalInfo.firstName}{" "}
          {userExemple.personalInfo.lastName}
        </h1>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <span>{userExemple.personalInfo.email}</span>
          <span>
            <Dot />
          </span>
          <span>{userExemple.personalInfo.phone}</span>
          <span>
            <Dot />
          </span>
          <span>
            {userExemple.personalInfo.city}, {userExemple.personalInfo.country}
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 text-blue-800 border-blue-800 pb-2 mb-4">
          Summary
        </h2>
        <p className="text-gray-700">{userExemple?.summary}</p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b-2 text-blue-800 border-blue-800 pb-2 mb-4">
              Experience
            </h2>
            {userExemple.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">
                  {exp.position} at {exp.company}
                </h3>
                <span className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Education
            </h2>
            {userExemple?.education?.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">
                  {edu.degree} in {edu.fieldOfStudy}
                </h3>
                <span className="text-sm text-gray-600">
                  {edu.institution} | {edu.startDate} -{" "}
                  {edu.endDate || "Present"}
                </span>
                <p className="text-gray-700 mt-2">{edu.description}</p>
              </div>
            ))}
          </section>
          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-800 border-b-2 border-blue-800 pb-1 mb-3">
              Projets
            </h2>
            {userExemple?.project?.map((edu, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <div className="text-xs text-blue-700 underline">
                  {edu.link}
                </div>
                <span className="text-sm text-gray-600">
                  {edu.company} | {edu.startDate.getFullYear()} -{" "}
                  {edu.endDate.getFullYear() || "Present"}
                </span>
                <p className="text-gray-700 mt-2">{edu.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column */}
        <div>
          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b-2 text-blue-800 border-blue-800 pb-2 mb-4">
              Skills
            </h2>
            <div className="space-y-3">
              {userExemple.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Language */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold border-b-2 text-blue-800 border-blue-800 pb-2 mb-4">
              Languages
            </h2>
            <div className="space-y-3">
              {userExemple?.language?.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{skill.name}</span>
                    <span className="text-gray-600">{skill.proficiency}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StyleAmericain1;

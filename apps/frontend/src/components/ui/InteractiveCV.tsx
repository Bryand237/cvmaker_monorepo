import React, { useState } from "react";
import EditableText from "./EditableText";

interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
}

const InteractiveCV: React.FC = () => {
  const [cvData, setCvData] = useState<CVData>({
    name: "Jean Dupont",
    title: "Développeur React Senior",
    email: "jean.dupont@email.com",
    phone: "+33 1 23 45 67 89",
    summary:
      "Développeur passionné avec 5 ans d'expérience dans la création d'applications web modernes avec React et TypeScript.",
    experience:
      "• Développement d'applications React - Entreprise XYZ (2019-2023)\n• Gestion d'équipe de 4 développeurs\n• Optimisation des performances",
  });

  const handleFieldChange = (field: keyof CVData) => (newValue: string) => {
    setCvData((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  return (
    <div
      id={"export-element"}
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6"
    >
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">
          <EditableText
            initialText={cvData.name}
            onTextChange={handleFieldChange("name")}
            className="text-3xl font-bold"
          />
        </h1>
        <p className="text-xl text-gray-600">
          <EditableText
            initialText={cvData.title}
            onTextChange={handleFieldChange("title")}
            className="text-xl text-gray-600"
          />
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Profil</h2>
            <EditableText
              initialText={cvData.summary}
              onTextChange={handleFieldChange("summary")}
              as="textarea"
              className="text-gray-700 leading-relaxed"
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Expérience Professionnelle
            </h2>
            <EditableText
              initialText={cvData.experience}
              onTextChange={handleFieldChange("experience")}
              as="textarea"
              className="text-gray-700 whitespace-pre-line"
            />
          </section>
        </div>

        <div className="md:col-span-1">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Coordonnées</h2>
            <div className="space-y-2">
              <p>
                <strong>Email: </strong>
                <EditableText
                  initialText={cvData.email}
                  onTextChange={handleFieldChange("email")}
                  className="text-blue-600"
                />
              </p>
              <p>
                <strong>Téléphone: </strong>
                <EditableText
                  initialText={cvData.phone}
                  onTextChange={handleFieldChange("phone")}
                />
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCV;

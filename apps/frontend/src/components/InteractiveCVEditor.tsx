import React from "react";
import { useCVDataStore } from "@/store/useCVDataStore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const InteractiveCVEditor: React.FC = () => {
  const { userInfos, setUserInfos } = useCVDataStore();

  const updatePersonalInfo = (field: string, value: string) => {
    setUserInfos({
      ...userInfos,
      personalInfo: {
        ...userInfos.personalInfo,
        [field]: value,
      },
    });
  };

  const updateSummary = (value: string) => {
    setUserInfos({
      ...userInfos,
      summary: value,
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      position: "Nouveau poste",
      company: "Entreprise",
      startDate: new Date().getFullYear().toString(),
      endDate: new Date().getFullYear().toString(),
      description: "Description de l'expérience",
    };
    setUserInfos({
      ...userInfos,
      experience: [...userInfos.experience, newExp],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setUserInfos({
      ...userInfos,
      experience: userInfos.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    setUserInfos({
      ...userInfos,
      experience: userInfos.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      degree: "Nouveau diplôme",
      institution: "Institution",
      startDate: new Date().getFullYear().toString(),
      endDate: new Date().getFullYear().toString(),
      description: "Description",
      fieldOfStudy: "Domaine d'étude",
    };
    setUserInfos({
      ...userInfos,
      education: [...userInfos.education, newEdu],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setUserInfos({
      ...userInfos,
      education: userInfos.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    setUserInfos({
      ...userInfos,
      education: userInfos.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill = {
      id: Date.now().toString(),
      name: "Nouvelle compétence",
      level: "Intermediate" as const,
    };
    setUserInfos({
      ...userInfos,
      skills: [...userInfos.skills, newSkill],
    });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    setUserInfos({
      ...userInfos,
      skills: userInfos.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    setUserInfos({
      ...userInfos,
      skills: userInfos.skills.filter((skill) => skill.id !== id),
    });
  };

  return (
    <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2">
      <h2 className="text-xl font-semibold text-gray-900">
        Éditez votre CV
      </h2>

      {/* Informations personnelles */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Informations personnelles
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              value={userInfos.personalInfo.firstName}
              onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              value={userInfos.personalInfo.lastName}
              onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userInfos.personalInfo.email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              value={userInfos.personalInfo.phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="title">Titre professionnel</Label>
            <Input
              id="title"
              value={userInfos.personalInfo.title}
              onChange={(e) => updatePersonalInfo("title", e.target.value)}
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Résumé */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Résumé</h3>
        <Textarea
          value={userInfos.summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={4}
          placeholder="Décrivez votre profil professionnel..."
        />
      </section>

      <Separator />

      {/* Expériences */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Expériences</h3>
          <Button onClick={addExperience} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        {userInfos.experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Poste</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) =>
                        updateExperience(exp.id, "position", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Entreprise</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(exp.id, "company", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Début</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "startDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Fin</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "endDate", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, "description", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </div>
              <Button
                onClick={() => removeExperience(exp.id)}
                variant="ghost"
                size="sm"
                className="ml-2"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Formations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Formations</h3>
          <Button onClick={addEducation} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        {userInfos.education.map((edu) => (
          <div
            key={edu.id}
            className="border border-gray-200 rounded-lg p-4 space-y-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Diplôme</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(edu.id, "degree", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Institution</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) =>
                        updateEducation(edu.id, "institution", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Début</Label>
                    <Input
                      value={edu.startDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "startDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Fin</Label>
                    <Input
                      value={edu.endDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "endDate", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <Button
                onClick={() => removeEducation(edu.id)}
                variant="ghost"
                size="sm"
                className="ml-2"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Compétences */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Compétences</h3>
          <Button onClick={addSkill} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {userInfos.skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
            >
              <div className="flex-1 grid grid-cols-2 gap-3">
                <Input
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  placeholder="Nom de la compétence"
                />
                <select
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(skill.id, "level", e.target.value)
                  }
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="Beginner">Débutant</option>
                  <option value="Intermediate">Intermédiaire</option>
                  <option value="Advanced">Avancé</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <Button
                onClick={() => removeSkill(skill.id)}
                variant="ghost"
                size="sm"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InteractiveCVEditor;

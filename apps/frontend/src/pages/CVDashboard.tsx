import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import ExperienceView from "@/components/ExperienceView";
import ExperienceInput from "@/components/ExperienceInput";
import EducationView from "@/components/EducationView";
import EducationInput from "@/components/EducationInput";
import SkillGroup from "@/components/SkillGroup";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CV } from "@cv-maker-app/utils";

const CVDashboard = () => {
  const tabsTriggers = [
    { value: "personalInfos", label: "Infos Personnels" },
    { value: "summary", label: "Résumé" },
    { value: "experience", label: "Expérience" },
    { value: "education", label: "Education" },
    { value: "skills", label: "Compétences" },
  ];

  const templateIndex = useTemplateIndexStore((state) => state.index);

  const [active, setActive] = useState<string>("personalInfos");
  const [viewInputExp, setViewInputExp] = useState<boolean>(false);
  const [viewInputEdu, setViewInputEdu] = useState<boolean>(false);

  const userInfos = useCVDataStore((state) => state.userInfos);
  const setCVUserInfos = useCVDataStore((state) => state.setUserInfos);

  // Les formulaires
  const personalInfosForm = useForm<typeof userInfos.personalInfo>();
  const summaryForm = useForm<Partial<CV>>();
  const experienceForm = useForm<(typeof userInfos.experience)[number]>();
  const educationForm = useForm<(typeof userInfos.education)[number]>();
  const skillsForm = useForm<(typeof userInfos.skills)[number]>();

  // Les effets
  useEffect(() => {
    // Initialisation
    personalInfosForm.reset(userInfos.personalInfo);
    summaryForm.reset(userInfos);
  }, []);

  // Les OnSubmit
  const persoInfoSubmit: SubmitHandler<typeof userInfos.personalInfo> = (
    data
  ) => {
    setCVUserInfos({ ...userInfos, personalInfo: data });
  };
  const summSubmit: SubmitHandler<Partial<CV>> = (data) => {
    setCVUserInfos({ ...userInfos, summary: data.summary });
  };
  const eduSubmit: SubmitHandler<(typeof userInfos.education)[number]> = (
    data
  ) => {
    setCVUserInfos({ ...userInfos, education: [...userInfos.education, data] });
  };
  const expSubmit: SubmitHandler<(typeof userInfos.experience)[number]> = (
    data
  ) => {
    setCVUserInfos({
      ...userInfos,
      experience: [...userInfos.experience, data],
    });
  };

  const skillsSubmit: SubmitHandler<(typeof userInfos.skills)[number]> = (
    data
  ) => {
    setCVUserInfos({
      ...userInfos,
      skills: [...userInfos.skills, data],
    });
  };

  // Next button action
  const nextTab = () => {
    const currentIndex = tabsTriggers.findIndex((tab) => tab.value === active);
    switch (tabsTriggers[currentIndex].value) {
      case "personalInfos":
        personalInfosForm.handleSubmit(persoInfoSubmit);
        break;
      case "summary":
        summaryForm.handleSubmit(summSubmit);
        break;
      case "education":
        educationForm.handleSubmit(eduSubmit);
        break;
      case "experience":
        experienceForm.handleSubmit(expSubmit);
        break;
      case "skills":
        skillsForm.handleSubmit(skillsSubmit);
        break;
    }
    if (currentIndex < tabsTriggers.length - 1) {
      setActive(tabsTriggers[currentIndex + 1].value);
    }
  };

  // Preview button action
  const prevTab = () => {
    const currentIndex = tabsTriggers.findIndex((tab) => tab.value === active);
    if (currentIndex > 0) {
      setActive(tabsTriggers[currentIndex - 1].value);
    }
  };

  return (
    <div>
      <Tabs value={active}>
        {/* Step bar (Tabs) */}
        <nav className="w-screen bg-muted/20 min-h-14 flex items-center justify-center">
          <TabsList className="pointer-events-none">
            {/* Tabs Triggers */}
            {tabsTriggers.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="transition-all duration-500"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </nav>
        {/* Main content */}
        <div className="main w-screen h-[calc(100dvh-128px)] flex items-center justify-center bg-gray-200">
          <AnimatePresence mode="sync">
            <TabsContent key={"personalInfos"} value="personalInfos">
              <div className="p-8 float-start w-[calc(50dvw)] h-[calc(100dvh-128px)] bg-white border-r shadow">
                <motion.div
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{
                    opacity: 1,
                    x: "0",
                    transition: {
                      duration: 0.4,
                      ease: easeInOut,
                      delay: 0.1,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: "100vw",
                  }}
                  className="h-[calc(100%-52px)]"
                >
                  <header className="header">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Infos Personnels
                    </h2>
                    <p className="leading-7 not-first:mt-4">
                      Remplissez vos informations personnelles ici.
                    </p>
                  </header>
                  <main className="main h-[calc(100%-140px)] my-6 py-4 mb-auto">
                    <form className="space-y-6">
                      <div className="grid w-full items-center gap-3">
                        <Label
                          htmlFor="title"
                          className="text-muted-foreground"
                        >
                          Titre d'emploi
                        </Label>
                        <Input
                          {...personalInfosForm.register("title", {
                            maxLength: {
                              value: 50,
                              message: "La longueur max est de 50 caractères.",
                            },
                          })}
                          type="text"
                          id="title"
                          placeholder="Software Engineer"
                          className="w-full rounded-full placeholder:text-foreground"
                        />
                        {personalInfosForm.formState.errors.title && (
                          <div className="text-sm text-red-400">
                            {personalInfosForm.formState.errors.title.message}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="grid w-full items-center gap-3">
                          <Label
                            htmlFor="firstname"
                            className="text-muted-foreground"
                          >
                            Nom
                          </Label>
                          <Input
                            {...personalInfosForm.register("firstName", {
                              maxLength: {
                                value: 50,
                                message:
                                  "La longueur max est de 50 caractères.",
                              },
                            })}
                            type="text"
                            id="fisrtname"
                            placeholder="John"
                            className="w-full rounded-full placeholder:text-foreground"
                          />
                          {personalInfosForm.formState.errors.firstName && (
                            <div className="text-sm text-red-400">
                              {
                                personalInfosForm.formState.errors.firstName
                                  .message
                              }
                            </div>
                          )}
                        </div>
                        <div className="grid w-full items-center gap-3">
                          <Label
                            htmlFor="lastname"
                            className="text-muted-foreground"
                          >
                            Prénom
                          </Label>
                          <Input
                            {...personalInfosForm.register("lastName", {
                              maxLength: {
                                value: 50,
                                message:
                                  "La longueur max est de 50 caractères.",
                              },
                            })}
                            type="text"
                            id="lastname"
                            placeholder="Doe"
                            className="w-full rounded-full placeholder:text-foreground"
                          />
                          {personalInfosForm.formState.errors.lastName && (
                            <div className="text-sm text-red-400">
                              {
                                personalInfosForm.formState.errors.lastName
                                  .message
                              }
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="grid w-full items-center gap-3">
                          <Label
                            htmlFor="email"
                            className="text-muted-foreground"
                          >
                            Email
                          </Label>
                          <Input
                            {...personalInfosForm.register("email", {
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email invalide",
                              },
                            })}
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full rounded-full placeholder:text-foreground"
                          />
                          {personalInfosForm.formState.errors.email && (
                            <div className="text-sm text-red-400">
                              {personalInfosForm.formState.errors.email.message}
                            </div>
                          )}
                        </div>
                        <div className="grid w-full items-center gap-3">
                          <Label
                            htmlFor="phone"
                            className="text-muted-foreground"
                          >
                            Téléphone
                          </Label>
                          <Input
                            {...personalInfosForm.register("phone")}
                            type="tel"
                            id="phone"
                            placeholder="6 58 97 45 23"
                            className="w-full rounded-full placeholder:text-foreground"
                          />
                          {personalInfosForm.formState.errors.phone && (
                            <div className="text-sm text-red-400">
                              {personalInfosForm.formState.errors.phone.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="grid w-full items-center gap-3">
                        <Label
                          htmlFor="address"
                          className="text-muted-foreground"
                        >
                          Adresse
                        </Label>
                        <Input
                          {...personalInfosForm.register("address", {
                            maxLength: {
                              value: 50,
                              message: "La longueur max est de 50 caractères.",
                            },
                          })}
                          type="text"
                          id="address"
                          placeholder="Douala, Cameroun"
                          className="w-full rounded-full placeholder:text-foreground"
                        />
                        {personalInfosForm.formState.errors.address && (
                          <div className="text-sm text-red-400">
                            {personalInfosForm.formState.errors.address.message}
                          </div>
                        )}
                      </div>
                    </form>
                  </main>
                </motion.div>
                <footer className="footer py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 md:flex-row">
                    <Button
                      onClick={prevTab}
                      variant="outline"
                      size={"lg"}
                      className="rounded-full"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={nextTab}
                      size={"lg"}
                      className="rounded-full"
                    >
                      Continuer
                    </Button>
                  </div>
                </footer>
              </div>
            </TabsContent>
            <TabsContent key={"summary"} value="summary">
              <div className="p-8 float-start w-[calc(50dvw)] h-[calc(100dvh-128px)] bg-white border-r shadow">
                <motion.div
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{
                    opacity: 1,
                    x: "0",
                    transition: {
                      duration: 0.4,
                      ease: easeInOut,
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, x: "100vw" }}
                  className="h-[calc(100%-52px)]"
                >
                  <header className="header">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Résumé
                    </h2>
                    <p className="leading-7 not-first:mt-4">
                      Ajoutez votre résumé professionnel ici.
                    </p>
                  </header>
                  <main className="main h-[calc(100%-140px)] my-6 py-4 mb-auto">
                    <form className="space-y-6">
                      <Textarea
                        {...summaryForm.register("summary", {
                          minLength: {
                            value: 25,
                            message:
                              "La longueur minumum est de 25 caractères.",
                          },
                        })}
                        className="min-h-38"
                        placeholder="Entrez du texte ici."
                      />
                      {summaryForm.formState.errors.summary && (
                        <div className="text-sm text-red-400">
                          {summaryForm.formState.errors.summary.message}
                        </div>
                      )}
                    </form>
                  </main>
                </motion.div>
                <footer className="footer py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 md:flex-row">
                    <Button
                      onClick={prevTab}
                      variant="outline"
                      size={"lg"}
                      className="rounded-full"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={nextTab}
                      size={"lg"}
                      className="rounded-full"
                    >
                      Continuer
                    </Button>
                  </div>
                </footer>
              </div>
            </TabsContent>
            <TabsContent key={"experience"} value="experience">
              <div className="p-8 float-start w-[calc(50dvw)] h-[calc(100dvh-128px)] bg-white border-r shadow">
                <motion.div
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{
                    opacity: 1,
                    x: "0",
                    transition: {
                      duration: 0.4,
                      ease: easeInOut,
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, x: "100vw" }}
                  className="h-[calc(100%-52px)]"
                >
                  <header className="header">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Expérience
                    </h2>
                    <p className="leading-7 not-first:mt-4">
                      Vos expériences professionnelles.
                    </p>
                  </header>
                  <main className="main h-[calc(100%-140px)] my-6 py-4 mb-auto overflow-y-auto">
                    <form className="space-y-6">
                      {userInfos.experience.map((exp) => (
                        <ExperienceView
                          key={exp.id}
                          position={exp.position}
                          company={exp.company}
                          from={exp.startDate}
                          to={exp.endDate}
                          description={exp.description || ""}
                        />
                      ))}

                      {viewInputExp && (
                        <div className="relative">
                          <ExperienceInput {...experienceForm} />)
                          <Button
                            type="button"
                            variant="outline"
                            size={"icon"}
                            onClick={() => setViewInputExp(false)}
                            className="absolute top-1 right-1 bg-gray-100 rounded-md p-1 outline-none h-10 text-foreground opacity-50 cursor-pointer"
                          >
                            <X />
                          </Button>
                        </div>
                      )}
                      <button
                        type="button"
                        className="flex items-center gap-2 text-slate-700 hover:text-slate-950"
                        onClick={() => setViewInputExp(true)}
                      >
                        <PlusCircle /> Ajouter une expérience
                      </button>
                    </form>
                  </main>
                </motion.div>
                <footer className="footer py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 md:flex-row">
                    <Button
                      onClick={prevTab}
                      variant="outline"
                      size={"lg"}
                      className="rounded-full"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={nextTab}
                      size={"lg"}
                      className="rounded-full"
                    >
                      Continuer
                    </Button>
                  </div>
                </footer>
              </div>
            </TabsContent>
            <TabsContent key={"education"} value="education">
              <div className="p-8 float-start w-[calc(50dvw)] h-[calc(100dvh-128px)] bg-white border-r shadow">
                <motion.div
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{
                    opacity: 1,
                    x: "0",
                    transition: {
                      duration: 0.4,
                      ease: easeInOut,
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, x: "100vw" }}
                  className="h-[calc(100%-52px)]"
                >
                  <header className="header">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Education
                    </h2>
                    <p className="leading-7 not-first:mt-4">
                      Vos differentes formations académiques.
                    </p>
                  </header>
                  <main className="main h-[calc(100%-140px)] my-6 py-4 mb-auto overflow-y-auto">
                    <form className="space-y-6">
                      {userInfos.education.map((edu) => (
                        <EducationView
                          key={edu.id}
                          degree={edu.degree}
                          institution={edu.institution}
                          startDate={edu.startDate}
                          endDate={edu.endDate}
                          fieldOfStudy={edu.fieldOfStudy}
                          description={edu.description || ""}
                        />
                      ))}

                      {viewInputEdu && (
                        <div className="relative">
                          <EducationInput {...educationForm} />
                          <Button
                            type="button"
                            variant="outline"
                            size={"icon"}
                            onClick={() => setViewInputEdu(false)}
                            className="absolute top-1 right-1 bg-gray-100 rounded-md p-1 outline-none h-10 text-foreground opacity-50 cursor-pointer"
                          >
                            <X />
                          </Button>
                        </div>
                      )}
                      <button
                        type="button"
                        className="flex items-center gap-2 text-slate-700 hover:text-slate-950"
                        onClick={() => setViewInputEdu(true)}
                      >
                        <PlusCircle /> Education
                      </button>
                    </form>
                  </main>
                </motion.div>
                <footer className="footer py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 md:flex-row">
                    <Button
                      onClick={prevTab}
                      variant="outline"
                      size={"lg"}
                      className="rounded-full"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={nextTab}
                      size={"lg"}
                      className="rounded-full"
                    >
                      Continuer
                    </Button>
                  </div>
                </footer>
              </div>
            </TabsContent>
            <TabsContent key={"skills"} value="skills">
              <div className="p-8 float-start w-[calc(50dvw)] h-[calc(100dvh-128px)] bg-white border-r shadow">
                <motion.div
                  initial={{ opacity: 0, x: "-100vw" }}
                  animate={{
                    opacity: 1,
                    x: "0",
                    transition: {
                      duration: 0.4,
                      ease: easeInOut,
                      delay: 0.1,
                    },
                  }}
                  exit={{ opacity: 0, x: "100vw" }}
                  className="h-[calc(100%-52px)]"
                >
                  <header className="header">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                      Compétences
                    </h2>
                    <p className="leading-7 not-first:mt-4">
                      Mettez en évidence vos competences.
                    </p>
                  </header>
                  <main className="main h-[calc(100%-140px)] my-6 py-4 mb-auto">
                    <form className="space-y-6">
                      <SkillGroup
                        skills={userInfos.skills}
                        groupTitle="Général"
                        skillForm={skillsForm}
                      />
                    </form>
                  </main>
                </motion.div>
                <footer className="footer py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 md:flex-row">
                    <Button
                      onClick={prevTab}
                      variant="outline"
                      size={"lg"}
                      className="rounded-full"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={nextTab}
                      size={"lg"}
                      className="rounded-full"
                    >
                      Continuer
                    </Button>
                  </div>
                </footer>
              </div>
            </TabsContent>
          </AnimatePresence>
          <div className="w-[794px] h-[1123px] shadow-lg border-2 transform scale-[0.65] bg-accent">
            {templateIndex === 0 && <StyleAmericain1 {...userInfos} />}
            {templateIndex === 1 && <StyleAmericain2 {...userInfos} />}
            {templateIndex === 2 && <StyleAnglais {...userInfos} />}
            {templateIndex === 3 && <StyleFrancais {...userInfos} />}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CVDashboard;

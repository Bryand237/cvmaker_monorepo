import AnimatedSection from "@/components/AnimatedSection";
import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { Button } from "@/components/ui/button";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import type { CV } from "@cv-maker-app/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

const templates = [
  {
    id: 0,
    name: "Style Américain 1",
    subtitle: "Moderne & Épuré",
    description:
      "Design minimaliste parfait pour les secteurs tech et startups. Met l'accent sur vos compétences et réalisations.",
    component: StyleAmericain1,
    tags: ["Moderne", "Tech", "Minimaliste"],
    popular: true,
  },
  {
    id: 1,
    name: "Style Américain 2",
    subtitle: "Classique & Professionnel",
    description:
      "Format traditionnel idéal pour les entreprises corporate. Structure claire et professionnelle.",
    component: StyleAmericain2,
    tags: ["Classique", "Corporate", "Traditionnel"],
    popular: false,
  },
  {
    id: 2,
    name: "Style Anglais",
    subtitle: "Élégant & Détaillé",
    description:
      "Présentation sophistiquée avec attention aux détails. Parfait pour les postes internationaux.",
    component: StyleAnglais,
    tags: ["Élégant", "International", "Détaillé"],
    popular: false,
  },
  {
    id: 3,
    name: "Style Français",
    subtitle: "Structuré & Académique",
    description:
      "Format académique respectant les standards français. Idéal pour l'administration et l'enseignement.",
    component: StyleFrancais,
    tags: ["Académique", "Structuré", "Formel"],
    popular: false,
  },
];

const DashboardTemplates = () => {
  const sampleData: CV = useCVDataStore((state) => state.userInfos);
  const navigate = useNavigate();
  const setCV = useTemplateIndexStore((state) => state.setIndex);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleSelectTemplate = (index: number) => {
    setSelectedTemplate(index);
    setCV(index as 0 | 1 | 2 | 3);
    setTimeout(() => {
      navigate("/dashboard/new");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
                Choisissez votre template
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Templates Professionnels
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Sélectionnez le modèle qui correspond le mieux à votre secteur
                et à votre style professionnel
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {templates.map((template, index) => {
            const TemplateComponent = template.component;
            return (
              <AnimatedSection key={template.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300">
                    {/* Template Info Header */}
                    <div className="p-6 bg-linear-to-r from-blue-50 to-purple-50">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {template.name}
                            </h3>
                            {template.popular && (
                              <span className="px-3 py-1 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-bold flex items-center gap-1">
                                <Star className="h-3 w-3 fill-current" />
                                Populaire
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-blue-600 mb-3">
                            {template.subtitle}
                          </p>
                          <p className="text-gray-700 text-sm mb-4">
                            {template.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {template.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        onClick={() => handleSelectTemplate(template.id)}
                        className="w-full rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
                        size="lg"
                      >
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Utiliser ce template
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Template Preview */}
                    <div className="relative bg-gray-100 p-6 overflow-hidden">
                      <div className="flex items-center justify-center">
                        <div
                          className="transform scale-50 origin-top shadow-2xl bg-white"
                          style={{
                            width: "794px",
                            height: "1123px",
                            transformOrigin: "top center",
                          }}
                        >
                          <TemplateComponent {...sampleData} />
                        </div>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Selected indicator */}
                    {selectedTemplate === template.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10"
                      >
                        <CheckCircle className="h-7 w-7 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Vous ne savez pas quel template choisir ?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Tous nos templates sont optimisés pour les ATS et conçus pour
              maximiser vos chances d'obtenir un entretien
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5" />
                <span>Format A4 standard</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5" />
                <span>Export PDF optimisé</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% personnalisable</span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DashboardTemplates;

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Style Américain",
    image: "/90e3541295a59173c58c6c5dc9fcebef.jpg",
    description: "Design moderne et épuré",
    tags: ["Moderne", "Tech", "Startup"],
  },
  {
    id: 2,
    name: "Style Classique",
    image: "/e8de4d3862ce052ec3384da9eaae7835.jpg",
    description: "Format traditionnel et professionnel",
    tags: ["Classique", "Corporate", "Finance"],
  },
  {
    id: 3,
    name: "Style Créatif",
    image: "/a03e45865cd2af541f4f594120765b1e.jpg",
    description: "Présentation originale et dynamique",
    tags: ["Créatif", "Design", "Marketing"],
  },
];

const HomeTemplates = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen min-h-screen bg-linear-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Nos Templates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Des modèles pour chaque secteur
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez parmi nos templates professionnels, conçus pour mettre en
            valeur votre expérience et impressionner les recruteurs.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-3/4">
                  <motion.img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        className="w-full rounded-full"
                        onClick={() => navigate("/dashboard/templates")}
                      >
                        Choisir ce modèle
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Popular badge */}
              {index === 0 && (
                <div className="absolute -top-3 -right-3 bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  Populaire
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Tous nos templates incluent
              </h3>
              <ul className="space-y-4">
                {[
                  "Design optimisé pour les ATS (Applicant Tracking Systems)",
                  "Format A4 standard pour l'impression",
                  "Sections personnalisables selon vos besoins",
                  "Export PDF haute qualité instantané",
                  "Compatible avec tous les secteurs d'activité",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-3/4 max-w-sm mx-auto">
                <img
                  src="/f8b00ad3e779664719a7c3ad0e7e00c7.jpg"
                  alt="Aperçu CV"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Prêt à créer votre CV parfait ?
          </h3>
          <p className="text-gray-600 mb-8">
            Commencez maintenant et obtenez un CV professionnel en quelques
            minutes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
              onClick={() => navigate("/dashboard")}
            >
              Créer mon CV gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => navigate("/dashboard/templates")}
            >
              Voir tous les templates
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTemplates;

import { motion } from "framer-motion";
import { FileText, Download, Sparkles, Lock, Zap, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Templates Professionnels",
    description:
      "Choisissez parmi une sélection de modèles conçus par des experts en recrutement pour maximiser votre impact.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Zap,
    title: "Édition Rapide",
    description:
      "Interface intuitive et rapide pour créer votre CV en quelques minutes. Double-cliquez pour modifier.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Download,
    title: "Export PDF Optimisé",
    description:
      "Téléchargez votre CV en format PDF haute qualité, optimisé pour l'impression A4 et le partage numérique.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Sparkles,
    title: "Design Moderne",
    description:
      "Des CV élégants et modernes qui se démarquent tout en restant professionnels et lisibles.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Lock,
    title: "Confidentialité Garantie",
    description:
      "Vos données sont stockées en toute sécurité et ne sont jamais partagées avec des tiers.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Users,
    title: "Approuvé par les Recruteurs",
    description:
      "Nos templates suivent les meilleures pratiques recommandées par les professionnels du recrutement.",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const HomeFeatures = () => {
  return (
    <section className="w-screen min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Pourquoi CVMaker
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin pour créer le CV parfait
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des outils puissants et simples pour vous aider à décrocher l'emploi
            de vos rêves
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">CV créés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4</div>
              <div className="text-blue-100">Templates professionnels</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Taux de satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;

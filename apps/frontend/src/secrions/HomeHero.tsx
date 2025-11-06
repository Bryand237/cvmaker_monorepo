import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen min-h-screen bg-linear-to-br from-gray-900 via-gray-950 to-black text-white flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 py-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-sm font-medium mb-6"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>Plateforme n°1 de création de CV</span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Créez le CV qui vous
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                démarque
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
              Des templates professionnels, une édition intuitive et un export
              PDF optimisé. Tout ce qu'il faut pour impressionner les
              recruteurs.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-8">
              {[
                "Modèles conçus par des experts RH",
                "Éditeur simple et intuitif",
                "Export PDF haute qualité instantané",
                "Données sécurisées et confidentielles",
              ].map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 group"
                onClick={() => navigate("/dashboard")}
              >
                Créer mon CV gratuitement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-white/30 hover:bg-white/10"
                onClick={() => navigate("/dashboard/templates")}
              >
                Voir les templates
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 border-2 border-gray-900"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p>Plus de 10 000 utilisateurs satisfaits</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image column with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2 w-full flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Main CV preview */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 w-[320px] md:w-[420px] relative z-10">
                <img
                  src="/f8b00ad3e779664719a7c3ad0e7e00c7.jpg"
                  alt="Exemple de CV professionnel"
                  className="w-full h-[480px] md:h-[600px] object-cover object-top"
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 top-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      2 min
                    </div>
                    <div className="text-xs text-gray-600">Temps moyen</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-6 bottom-32 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-600">Note moyenne</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

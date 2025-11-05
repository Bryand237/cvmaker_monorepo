import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HomeHero: React.FC = () => {
  return (
    <section className="w-screen min-h-screen bg-gray-950 text-white flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 py-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-sm font-medium">
              Nouveau • Gratuit
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              Obtenez un CV professionnel qui attire l'attention
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Concevez, personnalisez et exportez un CV optimisé pour les
              recruteurs. Templates prêts à l'emploi, export A4 haute qualité et
              édition rapide.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size={"lg"} className="rounded-full">
                Commencer
              </Button>
              <Button variant="outline" size={"lg"} className="rounded-full">
                Voir les modèles
              </Button>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground max-w-md">
              <li>• Templates validés par des recruteurs</li>
              <li>• Export PDF & impression A4</li>
              <li>• Confidentialité et sauvegarde</li>
              <li>• Editeur simple et rapide</li>
            </ul>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 w-full flex items-center justify-center"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl w-[360px] md:w-[460px]">
              <img
                src="/f8b00ad3e779664719a7c3ad0e7e00c7.jpg"
                alt="Exemple de CV — aperçu"
                className="w-full h-[520px] md:h-[600px] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

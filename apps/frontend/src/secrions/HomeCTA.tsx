import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen py-20 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
          >
            <Sparkles className="h-8 w-8 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Créez votre CV professionnel dès maintenant
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Rejoignez des milliers de professionnels qui ont déjà créé leur CV
            avec CVMaker et décrochez l'emploi de vos rêves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-white text-blue-600 hover:bg-gray-100 px-8 shadow-xl group"
              onClick={() => navigate("/dashboard")}
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate("/dashboard/templates")}
            >
              Explorer les templates
            </Button>
          </div>

          {/* Small text */}
          <p className="mt-8 text-white/70 text-sm">
            Aucune carte de crédit requise • 100% gratuit • Commencez en 2
            minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;

import HomeHeader from "@/components/HomeHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeWelcom = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-screen h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/a542f6d73f097c7569cfcc39f4316955.jpg')",
      }}
    >
      {/* Header */}
      <div className="absolute inset-x-0 top-0 z-50">
        <HomeHeader />
      </div>

      {/* Overlay gradient to improve contrast */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-transparent to-black/40" />

      {/* Hero content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight">
            Créez un CV professionnel, rapide et impactant
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            CVMaker vous aide à concevoir, personnaliser et exporter des CV
            optimisés pour les recruteurs — impression A4, export PDF et partage
            en un clic.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                size={"lg"}
                className="rounded-full"
                onClick={() => navigate("/dashboard")}
              >
                Commencer
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button variant="outline" size={"lg"} className="rounded-full">
                Découvrir les modèles
              </Button>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="px-3 py-1 bg-white/10 rounded-full">
              Export PDF A4
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full">
              Templates professionnels
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full">
              Confidentialité
            </span>
          </div>
        </motion.div>

        {/* Small preview of templates */}
        {/* <div className="mt-12 w-full max-w-5xl">
          <AnimatedSection>
            <div className="flex gap-4 overflow-x-auto py-4 px-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[220px] h-[300px] bg-white/90 rounded-lg shadow-lg shrink-0 overflow-hidden"
                >
                  <div className="h-2/3 bg-linear-to-b from-slate-200 to-slate-300" />
                  <div className="p-3">
                    <h4 className="font-semibold">Modèle {i + 1}</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Aperçu du template — clair, professionnel et optimisé pour
                      les recruteurs.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 flex items-center justify-center w-full">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/90"
            aria-hidden
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeWelcom;

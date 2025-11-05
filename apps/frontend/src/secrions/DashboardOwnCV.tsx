import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const DashboardOwnCV = () => {
  return (
    <div className="w-full space-y-8 p-4 bg-gray-100 rounded-md h-full">
      <AnimatedSection>
        <div className="flex gap-4 justify-center flex-wrap py-4 px-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              title="Clickez pour télécharger"
              whileHover={{ scale: 1.0125 }}
              key={i}
              className="min-w-[220px] w-[440px] mb-4 h-[300px] bg-white/90 rounded-lg shadow-lg shrink-0 overflow-hidden"
            >
              <a
                href={""}
                download={
                  "http://localhost:5173/a03e45865cd2af541f4f594120765b1e.jpg"
                }
              >
                <div
                  className="h-2/3 bg-linear-to-b from-slate-200 to-slate-300"
                  style={{
                    backgroundImage:
                      "url('/a03e45865cd2af541f4f594120765b1e.jpg')",
                  }}
                />
                <div className="p-3">
                  <h4 className="font-semibold">Modèle {i + 1}</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Aperçu du template — clair, professionnel et optimisé pour
                    les recruteurs.
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DashboardOwnCV;

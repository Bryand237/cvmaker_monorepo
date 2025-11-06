import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useSavedCVsStore } from "@/store/useSavedCVsStore";
import { FileText, Download, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DashboardOwnCV = () => {
  const { savedCVs, removeSavedCV } = useSavedCVsStore();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDownloadCV = async (savedCV: any) => {
    try {
      // Si une miniature existe, on peut la télécharger directement
      if (savedCV.thumbnail) {
        // Créer un lien de téléchargement à partir de la miniature/données
        const link = document.createElement("a");
        link.href = savedCV.thumbnail;
        link.download = savedCV.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
      alert("Impossible de télécharger le CV");
    }
  };

  const handleDeleteCV = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce CV ?")) {
      setDeletingId(id);
      setTimeout(() => {
        removeSavedCV(id);
        setDeletingId(null);
      }, 300);
    }
  };

  return (
    <div className="w-full space-y-8 p-6 bg-linear-to-br from-gray-50 to-gray-100 rounded-md h-full overflow-auto">
      <AnimatedSection>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mes CV</h1>
          <p className="text-gray-600 mt-1">
            Gérez et téléchargez vos CV sauvegardés
          </p>
        </div>

        {savedCVs.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FileText className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun CV sauvegardé
            </h3>
            <p className="text-gray-600 mb-6">
              Créez et exportez un CV pour le voir apparaître ici
            </p>
            <Button onClick={() => (window.location.href = "/dashboard/new")}>
              Créer un CV
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCVs.map((savedCV) => (
              <motion.div
                key={savedCV.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: deletingId === savedCV.id ? 0 : 1,
                  scale: deletingId === savedCV.id ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
              >
                {/* Miniature du CV */}
                <div className="h-48 bg-linear-to-br from-blue-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {savedCV.thumbnail ? (
                    <img
                      src={savedCV.thumbnail}
                      alt={savedCV.fileName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FileText className="h-16 w-16 text-gray-400" />
                  )}
                </div>

                {/* Informations */}
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 truncate mb-2">
                    {savedCV.cv.personalInfo.firstName}{" "}
                    {savedCV.cv.personalInfo.lastName}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    {savedCV.cv.personalInfo.title}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(savedCV.createdAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleDownloadCV(savedCV)}
                      className="flex-1"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                    <Button
                      onClick={() => handleDeleteCV(savedCV.id)}
                      variant="destructive"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Statistiques */}
        {savedCVs.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Statistiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">
                  {savedCVs.length}
                </p>
                <p className="text-sm text-gray-600 mt-1">CV créés</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-3xl font-bold text-green-600">
                  {
                    savedCVs.filter((cv) => {
                      const cvDate = new Date(cv.createdAt);
                      const now = new Date();
                      return (
                        cvDate.getMonth() === now.getMonth() &&
                        cvDate.getFullYear() === now.getFullYear()
                      );
                    }).length
                  }
                </p>
                <p className="text-sm text-gray-600 mt-1">Ce mois-ci</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">
                  {savedCVs.length > 0
                    ? new Date(
                        savedCVs[savedCVs.length - 1].createdAt
                      ).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                      })
                    : "-"}
                </p>
                <p className="text-sm text-gray-600 mt-1">Dernier CV</p>
              </div>
            </div>
          </div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default DashboardOwnCV;

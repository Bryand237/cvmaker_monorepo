import AnimatedSection from "@/components/AnimatedSection";
import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { Button } from "@/components/ui/button";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import { useSavedCVsStore } from "@/store/useSavedCVsStore";
import { Download, CheckCircle } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";
import InteractiveCVEditor from "@/components/InteractiveCVEditor";

const DashboradCV = () => {
  const templateIndex = useTemplateIndexStore((state) => state.index);
  const userInfos = useCVDataStore((state) => state.userInfos);
  const addSavedCV = useSavedCVsStore((state) => state.addSavedCV);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleExportPDF = async () => {
    try {
      setIsExporting(true);
      setExportSuccess(false);

      const element = document.querySelector("#cv-preview") as HTMLElement;
      if (!element) {
        throw new Error("Élément CV introuvable");
      }

      // Capture du CV en canvas pour la miniature
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdfWidth = 210;
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

      // Génération du PDF
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? "landscape" : "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Nom du fichier
      const fileName = `CV_${userInfos.personalInfo.firstName}_${
        userInfos.personalInfo.lastName
      }_${new Date().toLocaleDateString("fr-FR").replace(/\//g, "-")}`;

      // Téléchargement du PDF
      pdf.save(`${fileName}.pdf`);

      // Sauvegarde dans les archives avec miniature
      const thumbnail = canvas.toDataURL("image/png", 0.3);
      addSavedCV(userInfos, thumbnail, `${fileName}.pdf`);

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6 p-6 h-full bg-linear-to-br from-gray-50 to-gray-100 rounded-md overflow-auto">
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          {/* Header avec actions */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Éditeur de CV
              </h1>
              <p className="text-gray-600 mt-1">
                Double-cliquez sur n'importe quel texte pour le modifier
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="flex items-center gap-2"
                size="lg"
              >
                {isExporting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Génération...
                  </>
                ) : exportSuccess ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Exporté !
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    Télécharger PDF
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Zone d'édition interactive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Éditeur de formulaire */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <InteractiveCVEditor />
            </div>

            {/* Aperçu du CV */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center justify-center">
              <div className="w-full max-w-[794px] mx-auto">
                <div className="mb-4 text-center">
                  <p className="text-sm text-gray-500">Aperçu en temps réel</p>
                </div>
                <div
                  id="cv-preview"
                  className="w-full bg-white shadow-xl transform scale-75 origin-top"
                  style={{ minHeight: "1123px" }}
                >
                  {templateIndex === 0 && <StyleAmericain1 {...userInfos} />}
                  {templateIndex === 1 && <StyleAmericain2 {...userInfos} />}
                  {templateIndex === 2 && <StyleAnglais {...userInfos} />}
                  {templateIndex === 3 && <StyleFrancais {...userInfos} />}
                </div>
              </div>
            </div>
          </div>

          {/* Message de succès */}
          {exportSuccess && (
            <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
              <CheckCircle className="h-5 w-5" />
              <span>CV exporté et ajouté aux archives !</span>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DashboradCV;

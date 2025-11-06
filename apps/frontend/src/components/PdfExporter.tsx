// components/PdfExporter.tsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface PdfExporterProps {
  // Sélecteur CSS de l'élément à capturer
  targetElement: string;
  // Nom du fichier PDF (sans extension)
  filename?: string;
  // Enfant pour déclencher l'export
  children: React.ReactNode;
}

const PdfExporter: React.FC<PdfExporterProps> = ({
  targetElement,
  filename = "document",
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    try {
      const element = document.querySelector(targetElement) as HTMLElement;

      if (!element) {
        throw new Error(`Élément "${targetElement}" introuvable`);
      }

      // Configuration par défaut pour html2canvas
      const defaultOptions: html2canvas.Options = {
        scale: 2, // Résolution plus élevée
        useCORS: true, // Autorise les images cross-origin
        logging: false, // Désactive les logs
      };

      // Capture l'élément en canvas
      const canvas = await html2canvas(element, defaultOptions);

      // Dimensions du canvas
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Dimensions du PDF (A4)
      const pdfWidth = 210; // mm
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth; // Conserve les proportions

      // Crée le PDF
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? "landscape" : "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      // Convertit le canvas en image Data URL
      const imgData = canvas.toDataURL("image/png", 1.0);

      // Ajoute l'image au PDF
      pdf.addImage(
        imgData,
        "PNG",
        0, // Position X
        0, // Position Y
        pdfWidth,
        pdfHeight
      );

      // Télécharge le PDF
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF" + error);
    }
  };

  return (
    <div ref={contentRef}>
      {React.cloneElement(children as React.ReactElement, {
        onClick: handleExport,
      })}
    </div>
  );
};

export default PdfExporter;

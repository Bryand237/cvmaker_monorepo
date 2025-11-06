// components/PdfExporterWithLoading.tsx
import React, { useState } from "react";
import PdfExporter from "./PdfExporter";

const PdfExporterWithLoading: React.FC<any> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async (originalExport: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await originalExport();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PdfExporter {...props}>
      {React.cloneElement(props.children, {
        onClick: () => handleExport(props.children.props.onClick),
        disabled: isLoading,
        children: isLoading ? "Génération..." : props.children.props.children,
      })}
    </PdfExporter>
  );
};

export default PdfExporterWithLoading;

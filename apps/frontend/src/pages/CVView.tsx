import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { Button } from "@/components/ui/button";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import type { CV } from "@cv-maker-app/utils";
import { useNavigate } from "react-router-dom";

const CVView = () => {
  const templateIndex = useTemplateIndexStore((state) => state.index);
  const sampleData: CV = useCVDataStore((state) => state.userInfos);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-[calc(100dvh-64px)] items-start p-10 overflow-hidden">
      <div className="to-print w-[794px] h-[1123px] origin-top-left shadow-lg border-2 transform bg-accent scale-[0.68] m-4">
        {templateIndex === 0 && <StyleAmericain1 {...sampleData} />}
        {templateIndex === 1 && <StyleAmericain2 {...sampleData} />}
        {templateIndex === 2 && <StyleAnglais {...sampleData} />}
        {templateIndex === 3 && <StyleFrancais {...sampleData} />}
      </div>
      <div className="flex flex-col gap-8 mt-[30vh]">
        <Button onClick={() => window.print()}>Telecharger le PDF</Button>
        <Button variant={"outline"} onClick={() => navigate(-1)}>
          Retour au dashboard
        </Button>
      </div>
    </div>
  );
};

export default CVView;

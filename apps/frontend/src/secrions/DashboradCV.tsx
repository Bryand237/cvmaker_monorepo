import AnimatedSection from "@/components/AnimatedSection";
import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";

const DashboradCV = () => {
  const templateIndex = useTemplateIndexStore((state) => state.index);
  const userInfos = useCVDataStore((state) => state.userInfos);
  return (
    <div className="space-y-8 p-4 h-fit bg-gray-100 rounded-md flex items-center justify-center">
      <AnimatedSection>
        <div className="w-[794px] h-[1123px] shadow-lg border-2 transform">
          {templateIndex === 0 && <StyleAmericain1 {...userInfos} />}
          {templateIndex === 1 && <StyleAmericain2 {...userInfos} />}
          {templateIndex === 2 && <StyleAnglais {...userInfos} />}
          {templateIndex === 3 && <StyleFrancais {...userInfos} />}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DashboradCV;

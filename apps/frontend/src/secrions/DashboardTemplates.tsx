import AnimatedSection from "@/components/AnimatedSection";
import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { Button } from "@/components/ui/button";
import { useCVDataStore } from "@/store/useCVDataStore";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import type { CV } from "@cv-maker-app/utils";
import { useNavigate } from "react-router-dom";

const DashboardTemplates = () => {
  const sampleData: CV = useCVDataStore((state) => state.userInfos);
  const navigate = useNavigate();
  const setCV = useTemplateIndexStore((state) => state.setIndex);
  return (
    <div className="space-y-8 p-4 bg-gray-100 min-h-screen rounded-md">
      <AnimatedSection>
        <div className="text-center z-20 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Modèles de CV
          </h1>
          <p className="text-gray-600">4 styles différents - Dimensions A4</p>
        </div>
      </AnimatedSection>

      <div className="space-y-12">
        <AnimatedSection>
          <div>
            <div className="flex items-center justify-evenly my-4">
              <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                Style Américain 1 - Moderne
              </h2>
              <Button
                onClick={() => {
                  setCV(0);
                  navigate("/dashboard/new");
                }}
                variant={"default"}
              >
                Choisir
              </Button>
            </div>
            <StyleAmericain1 {...sampleData} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div>
            <div className="flex items-center justify-evenly my-4">
              <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                Style Américain 2 - Classique
              </h2>
              <Button
                variant={"default"}
                onClick={() => {
                  setCV(1);
                  navigate("/dashboard/new");
                }}
              >
                Choisir
              </Button>
            </div>
            <StyleAmericain2 {...sampleData} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div>
            <div className="flex items-center justify-evenly my-4">
              <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                Style Anglais
              </h2>
              <Button
                variant={"default"}
                onClick={() => {
                  setCV(2);
                  navigate("/dashboard/new");
                }}
              >
                Choisir
              </Button>
            </div>
            <StyleAnglais {...sampleData} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div>
            <div className="flex items-center justify-evenly my-4">
              <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
                Style Français
              </h2>
              <Button
                variant={"default"}
                onClick={() => {
                  setCV(3);
                  navigate("/dashboard/new");
                }}
              >
                Choisir
              </Button>
            </div>
            <StyleFrancais {...sampleData} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DashboardTemplates;

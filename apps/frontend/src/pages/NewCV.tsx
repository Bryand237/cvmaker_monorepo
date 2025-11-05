import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import { useCVDataStore } from "@/store/useCVDataStore";
import type { CV } from "@cv-maker-app/utils";

const NewCV = () => {
  const sampleData: CV = useCVDataStore((state) => state.userInfos);
  return (
    <div className="space-y-8 p-4 bg-gray-100 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Modèles de CV</h1>
        <p className="text-gray-600">4 styles différents - Dimensions A4</p>
      </div>

      <div className="space-y-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Style Américain 1 - Moderne
          </h2>
          <StyleAmericain1 {...sampleData} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Style Américain 2 - Classique
          </h2>
          <StyleAmericain2 {...sampleData} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Style Anglais
          </h2>
          <StyleAnglais {...sampleData} />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Style Français
          </h2>
          <StyleFrancais {...sampleData} />
        </div>
      </div>
    </div>
  );
};

export default NewCV;

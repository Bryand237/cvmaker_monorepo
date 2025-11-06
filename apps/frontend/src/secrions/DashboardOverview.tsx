import AnimatedSection from "@/components/AnimatedSection";
import { useSavedCVsStore } from "@/store/useSavedCVsStore";
import { useCVDataStore } from "@/store/useCVDataStore";
import { FileText, Download, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardOverview = () => {
  const savedCVs = useSavedCVsStore((state) => state.savedCVs);
  const currentCV = useCVDataStore((state) => state.userInfos);
  const navigate = useNavigate();

  // Statistics
  const totalCVs = savedCVs.length;
  const thisMonthCVs = savedCVs.filter((cv) => {
    const cvDate = new Date(cv.createdAt);
    const now = new Date();
    return (
      cvDate.getMonth() === now.getMonth() &&
      cvDate.getFullYear() === now.getFullYear()
    );
  }).length;

  const recentCVs = savedCVs.slice(-3).reverse();

  return (
    <div className="space-y-8 p-6 bg-linear-to-br from-gray-50 to-gray-100 rounded-md h-full overflow-auto">
      <AnimatedSection>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Bienvenue sur CVMaker - Gérez et créez vos CV professionnels
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total CV</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalCVs}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ce mois-ci</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {thisMonthCVs}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Téléchargements
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalCVs}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Download className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Dernière modification
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  {currentCV.updatedAt
                    ? new Date(currentCV.updatedAt).toLocaleDateString("fr-FR")
                    : "Aujourd'hui"}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Actions rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              className="w-full h-auto py-4 flex flex-col items-center gap-2"
              variant="outline"
              onClick={() => navigate("/dashboard/new")}
            >
              <FileText className="h-5 w-5" />
              <span>Créer un nouveau CV</span>
            </Button>
            <Button
              className="w-full h-auto py-4 flex flex-col items-center gap-2"
              variant="outline"
              onClick={() => navigate("/dashboard/own")}
            >
              <Download className="h-5 w-5" />
              <span>Exporter en PDF</span>
            </Button>
            <Button
              className="w-full h-auto py-4 flex flex-col items-center gap-2"
              variant="outline"
              onClick={() => navigate("/dashboard/own")}
            >
              <FileText className="h-5 w-5" />
              <span>Voir mes CVs</span>
            </Button>
          </div>
        </div>

        {/* Recent CVs */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">CV récents</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/dashboard/own")}
            >
              Voir tout
            </Button>
          </div>

          {recentCVs.length > 0 ? (
            <div className="space-y-3">
              {recentCVs.map((savedCV) => (
                <div
                  key={savedCV.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => navigate("/dashboard/own")}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {savedCV.fileName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(savedCV.createdAt).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 mb-4">Aucun CV créé pour le moment</p>
              <Button onClick={() => navigate("/dashboard/new")}>
                Créer votre premier CV
              </Button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Rapide et simple
            </h3>
            <p className="text-sm text-gray-600">
              Créez un CV professionnel en quelques étapes guidées. Notre
              éditeur prend en charge toutes les sections standard.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Modèles professionnels
            </h3>
            <p className="text-sm text-gray-600">
              Choisissez parmi plusieurs modèles conçus par des professionnels
              du recrutement pour maximiser l'impact visuel.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Export sécurisé
            </h3>
            <p className="text-sm text-gray-600">
              Exports en PDF optimisés pour l'impression A4. Vos données sont
              confidentielles et stockées en toute sécurité.
            </p>
          </article>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default DashboardOverview;

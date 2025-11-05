import StyleAmericain1 from "@/components/templates/StyleAmericain1";
import StyleAmericain2 from "@/components/templates/StyleAmericain2";
import StyleAnglais from "@/components/templates/StyleAnglais";
import StyleFrancais from "@/components/templates/StyleFrancais";
import type { CV } from "@cv-maker-app/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTemplateIndexStore } from "@/store/useTemplateIndexStore";
import { useNavigate } from "react-router-dom";
import { useCVDataStore } from "@/store/useCVDataStore";

const TemplatePage = () => {
  const sampleData: CV = useCVDataStore((state) => state.userInfos);
  const setTemplateIndex = useTemplateIndexStore((state) => state.setIndex);
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Modèles de CV</h1>
        <p className="text-gray-600">4 styles différents - Dimensions A4</p>
      </div>
      {/* Template List */}
      <div className="h-[calc(100%)] w-full lg:w-5xl m-auto p-8 flex flex-col gap-8 md:flex-row md:flex-wrap justify-center items-center">
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <div className="w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-[0.65]">
              <StyleAmericain1 {...sampleData} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Style Americain 1</DialogTitle>
              <DialogDescription className="mt-4 mb-8 relative h-[570px] overflow-hidden">
                <div className="absolute top-0 -left-42 w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-50">
                  <StyleAmericain1 {...sampleData} />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Fermer</Button>
              </DialogClose>
              <Button
                onClick={() => {
                  setTemplateIndex(0);
                  navigate("/cv_dashboard");
                }}
              >
                Utiliser ce modèle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <div className="w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-[0.65]">
              <StyleAmericain2 {...sampleData} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Style Americain 2</DialogTitle>
              <DialogDescription className="mt-4 mb-8 relative h-[570px] overflow-hidden">
                <div className="absolute top-0 -left-42 w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-50">
                  <StyleAmericain2 {...sampleData} />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Fermer</Button>
              </DialogClose>
              <Button
                onClick={() => {
                  setTemplateIndex(1);
                  navigate("/cv_dashboard");
                }}
              >
                Utiliser ce modèle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <div className="w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-[0.65]">
              <StyleAnglais {...sampleData} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Style Anglais</DialogTitle>
              <DialogDescription className="mt-4 mb-8 relative h-[570px] overflow-hidden">
                <div className="absolute top-0 -left-42 w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-50">
                  <StyleAnglais {...sampleData} />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Fermer</Button>
              </DialogClose>
              <Button
                onClick={() => {
                  setTemplateIndex(2);
                  navigate("/cv_dashboard");
                }}
              >
                Utiliser ce modèle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <div className="w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-[0.65]">
              <StyleFrancais {...sampleData} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Style Français</DialogTitle>
              <DialogDescription className="mt-4 mb-8 relative h-[570px] overflow-hidden">
                <div className="absolute top-0 -left-42 w-[794px] text-start origin-top h-[1123px] mx-auto shadow-lg border-2 transform bg-accent scale-50">
                  <StyleFrancais {...sampleData} />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"}>Fermer</Button>
              </DialogClose>
              <Button
                onClick={() => {
                  setTemplateIndex(3);
                  navigate("/cv_dashboard");
                }}
              >
                Utiliser ce modèle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TemplatePage;

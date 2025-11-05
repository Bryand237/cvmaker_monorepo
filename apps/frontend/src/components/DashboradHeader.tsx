import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useUserStore } from "@/store/useUserStore";

const getUrl = (pathname: string): string => {
  let headerUrl: string = "";
  const BASEPATH = "/dashboard";

  switch (pathname) {
    case BASEPATH:
      headerUrl = "Vue d'ensemble";
      break;
    case BASEPATH + "/templates":
      headerUrl = "Templates";
      break;
    case BASEPATH + "/new":
      headerUrl = "Nouveau CV";
      break;
    case BASEPATH + "/own":
      headerUrl = "Mes réalisations";
      break;
  }

  return headerUrl;
};

const DashboradHeader = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const removeUser = useUserStore((state) => state.removeUser);
  return (
    <div className="w-full h-16 shadow border p-2 gap-19 rounded-md flex items-center justify-between">
      <h1 className="text-lg md:text-2xl font-semibold">{getUrl(location)}</h1>
      {/* <SearchInput /> */}
      <Sheet>
        <SheetTrigger>
          <div className="p-2 rounded-full shadow hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-accent-foreground/10">
            <Avatar className="bg-transparent">
              <AvatarImage src="./IMG_20250706_141140_491.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="avatar">
                <Avatar className="bg-transparent w-20 h-20 m-8 mx-auto">
                  <AvatarImage src="./IMG_20250706_141140_491.jpg" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </div>
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <div className="text-center text-foreground">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Mastermind
              </h2>
              <p className="leading-7 not-first:mt-4">
                masterminddelta237@gmail.com
              </p>
              <div className="flex flex-col gap-4 mt-8 px-6">
                <Button
                  variant={"secondary"}
                  className="hover:bg-gray-200"
                  onClick={() => navigate("/dashboard/own")}
                >
                  Mes CVs
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    removeUser();
                    navigate("/");
                  }}
                >
                  Se deconnecter
                </Button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashboradHeader;
